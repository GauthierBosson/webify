"use client"

import { useRef, useState } from 'react'
import EditorView from './EditorView'
import { NewPage, Page } from '@/lib/types'
import EditorPanel from './EditorPanel'
import { db } from '@/lib/db'

export default function Editor() {
  const [page, setPage] = useState<Page | NewPage>()
  const iframeRef = useRef<HTMLIFrameElement>(null)

  return (
    <section>
      <div className='flex w-full mb-8'>
        <EditorView ref={iframeRef} />
        <EditorPanel iframeRef={iframeRef} setPage={setPage} />
      </div>
    </section>
  )
}
