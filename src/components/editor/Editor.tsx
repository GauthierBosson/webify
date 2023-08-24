'use client'

import { useRef, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { pageSchema } from '@/lib/validation'
import EditorView from './EditorView'
import { Page } from '@/lib/types'
import EditorPanel from './EditorPanel'

export default function Editor() {
  const [page, setPage] = useState<Page>()
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
