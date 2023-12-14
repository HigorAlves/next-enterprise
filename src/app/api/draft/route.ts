import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

const { CONTENTFUL_PREVIEW_ACCESS_TOKEN } = process.env

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  if (searchParams.get('previewSecret') !== CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    return new Response('Invalid token', { status: 401 })
  }

  draftMode().enable()

  redirect(searchParams.get('redirect') || '/')
}
