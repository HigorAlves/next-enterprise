import type { CodegenConfig } from '@graphql-codegen/cli'
import * as dotenv from 'dotenv'

dotenv.config()

const TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const SPACE = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const URL = `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}${SPACE}`

const config: CodegenConfig = {
  schema: [
    {
      [URL]: {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    },
  ],
  overwrite: true,
  documents: ['src/graphql/**/*.ts', 'src/**/*.tsx'],
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
}

export default config
