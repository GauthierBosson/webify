import { Button } from '../ui/button'
import { v4 as uuid } from 'uuid'
import { pageSchema, newPageSchema } from '@/lib/validation'
import { Page, NewPage } from '@/lib/types'
import { createPage } from './editor.actions'

type Props = {
  iframeRef: React.MutableRefObject<HTMLIFrameElement | null>
  setPage: React.Dispatch<React.SetStateAction<Page | NewPage | undefined>>
}

export default function EditorPanel({ iframeRef, setPage }: Props) {
  function addToDocument({
    type,
  }: {
    type: Omit<keyof HTMLElementTagNameMap, 'html' | 'head' | 'body'>
  }) {
    const id = uuid()

    const doc = iframeRef!.current!.contentDocument!
    const newElement = doc.createElement(type as string)
    newElement.textContent = '<script>document.write("osef")</script>'
    newElement.setAttribute('data-webify-id', id)
    doc.body.appendChild(newElement)

    const cleanDOM = newPageSchema.parse({
      name: '',
      content: doc.body.innerHTML,
    })
    setPage(cleanDOM)
  }

  async function handleClick() {
    const result = await createPage()

    console.log(result)
  }

  return (
    <div className='flex-1'>
      <Button onClick={() => addToDocument({ type: 'section' })}>
        Add section
      </Button>
      <Button>Add row</Button>
      <Button>Add column</Button>
      <Button>Add element</Button>
      <Button onClick={() => handleClick()}>Add a new page to the database</Button>
    </div>
  )
}
