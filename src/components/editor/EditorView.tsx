import { Page } from '@/lib/types'
import { useCallback, forwardRef, MutableRefObject, useEffect } from 'react'

// Not a normal use of Partial, but TS is complaining otherwise
const EditorView = forwardRef<HTMLIFrameElement, Partial<Page> | undefined>(
  (page, ref) => {
    const iframeRef = ref as MutableRefObject<HTMLIFrameElement>

    // TODO: Optimize this
    useEffect(() => {
      if (!iframeRef.current) return

      const cssBase = document.createElement('style')
      cssBase.innerHTML = `body > [data-webify-id]:hover {
      outline: 1px dashed red;
      cursor: pointer;
    }`
      iframeRef.current.contentWindow?.document.head.appendChild(cssBase)

      console.log('page', page?.content)

      if (page?.content)
        iframeRef.current.contentWindow?.document.body.appendChild(
          document.createRange().createContextualFragment(page.content),
        )
    }, [])

    return (
      <div className='flex-1'>
        <iframe id='page-frame' allowFullScreen ref={iframeRef} />
      </div>
    )
  },
)

EditorView.displayName = 'EditorView'

export default EditorView
