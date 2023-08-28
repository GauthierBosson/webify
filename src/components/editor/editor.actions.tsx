"use server"

import { db } from '@/lib/db'

export async function createPage() {
  try {
    const result = await db.page.create({
      data: { name: 'test', content: '<h1>test</h1>' },
    })

    return result
  } catch (error) {
    console.log(error)
  }
}
