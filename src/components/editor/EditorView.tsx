import { forwardRef, MutableRefObject, useEffect } from 'react'

const EditorView = forwardRef<HTMLIFrameElement>((_, ref) => {
  const inputRef = ref as MutableRefObject<HTMLIFrameElement>

  useEffect(() => {
    if (!inputRef.current) return

    const cssBase = document.createElement('style')
    cssBase.innerHTML = `body > [data-webify-id]:hover {
      outline: 1px dashed red;
      cursor: pointer;
    }`
    inputRef.current.contentWindow?.document.head.appendChild(cssBase)
  }, [inputRef])

  return <iframe id='page-frame' allowFullScreen ref={inputRef} />
})

EditorView.displayName = 'EditorView'

export default EditorView
