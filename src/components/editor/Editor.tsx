'use client'

import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { pageSchema } from '@/lib/validation'
import EditorView from './EditorView'
import { v4 as uuid } from 'uuid'

export default function Editor() {
  const formRef = useRef<HTMLFormElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(pageSchema),
  })

  function addToDocument({
    type,
  }: {
    type: Omit<keyof HTMLElementTagNameMap, 'html' | 'head' | 'body'>
  }) {
    const id = uuid()

    const doc = iframeRef!.current!.contentDocument!
    const newElement = doc.createElement(type as string)
    newElement.textContent = 'Hello world'
    newElement.setAttribute('data-webify-id', id)
    doc.body.appendChild(newElement)
  }

  const onSubmit = (data) => {
    return console.log(data)
  }

  const onInvalid = (errors) => console.error(errors)

  return (
    <section>
      <div className='flex w-full mb-8'>
        <div className='flex-1'>
          <EditorView ref={iframeRef} />
        </div>
        <div className='flex-1'>
          <Button onClick={() => addToDocument({ type: 'section' })}>
            Add section
          </Button>
          <Button>Add row</Button>
          <Button>Add column</Button>
          <Button>Add element</Button>
        </div>
      </div>
      <form className='hidden' ref={formRef}>
        <input type='hidden' {...register('id')} />
        <input type='hidden' {...register('name')} />
      </form>
      <Button onClick={handleSubmit(onSubmit, onInvalid)} type='submit'>
        Save
      </Button>
    </section>
  )
}
