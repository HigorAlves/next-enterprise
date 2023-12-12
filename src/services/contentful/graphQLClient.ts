import { GraphQLClient } from 'graphql-request'

const url: string | undefined = process.env.CONTENTFUL_URL
const space: string | undefined = process.env.CONTENTFUL_SPACE_ID
const accessToken: string | undefined = process.env.CONTENTFUL_ACCESS_TOKEN

if (!url || !space || !accessToken) {
  throw new Error('Contentful env vars are not set.')
}

const endpoint = `${url}${space}`

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
})

export default graphQLClient
