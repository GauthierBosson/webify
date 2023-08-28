import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const page = await db.page.findFirst({
      where: {
        id: 1,
      },
    })

    return NextResponse.json(page)
  } catch {
    return NextResponse.json({ status: 500, error: 'Something went wrong' })
  }
}

export async function POST(data: any) {
  try {
    const newPage = await db.page.create({
      data
    })
  } catch {
    return NextResponse.json({ status: 500, error: 'Something went wrong' })
  }
}

export async function PATCH() {}

export async function DELETE() {}
