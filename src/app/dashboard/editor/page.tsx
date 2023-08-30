import Editor from '@/components/editor/Editor'
import { pageSchema } from '@/lib/validation'

async function getPage() {
  const res = await (
    await fetch(`${process.env.APP_URL}/dashboard/editor/api`)
  ).json()

  const item = pageSchema.safeParse(res)

  if (!item.success) return undefined

  return item.data
}

export default async function EditorPage() {
  const page = await getPage()

  return <Editor item={page} />
}
