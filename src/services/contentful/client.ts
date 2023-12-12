import * as contentful from 'contentful'

const space: string | undefined = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken: string | undefined = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

if (!space || !accessToken) {
  throw new Error('Contentful env vars are not set.')
}

const contentfulClient = contentful.createClient({
  space,
  accessToken,
})

export default contentfulClient
