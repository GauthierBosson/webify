'use client'

import { useRef, useState, useEffect } from 'react'
import EditorView from './EditorView'
import { NewPage, Page } from '@/lib/types'
import EditorPanel from './EditorPanel'

export default function Editor({ item }: { item: Page | undefined }) {
  const [page, setPage] = useState<Page | NewPage | undefined>()
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (!item) return

    setPage(item)
  }, [item])

  return (
    <section>
      <div className='flex w-full mb-8'>
        <EditorView ref={iframeRef} { ...item } />
        <EditorPanel iframeRef={iframeRef} setPage={setPage} />
      </div>
    </section>
  )
}
