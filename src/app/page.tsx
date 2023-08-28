import Editor from '@/components/editor/Editor'

async function getPage() {}

export default async function Home() {

  const data = await getPage()

  return (
    <main>
      <Editor />
    </main>
  )
}
