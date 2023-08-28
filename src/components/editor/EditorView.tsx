import { Page } from '@/lib/types'
import { useCallback, forwardRef, MutableRefObject, useEffect } from 'react'

const EditorView = forwardRef<HTMLIFrameElement, Partial<Page> | undefined>(
  (page, ref) => {
    const iframeRef = ref as MutableRefObject<HTMLIFrameElement>

    useEffect(() => {
      if (!iframeRef.current) return

      const cssBase = document.createElement('style')
      cssBase.innerHTML = `body > [data-webify-id]:hover {
      outline: 1px dashed red;
      cursor: pointer;
    }`
      iframeRef.current.contentWindow?.document.head.appendChild(cssBase)

      if (page?.content)
        iframeRef.current.contentWindow?.document.body.append(page.content)
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
