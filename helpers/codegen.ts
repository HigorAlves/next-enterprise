import type { CodegenConfig } from '@graphql-codegen/cli'

import * as dotenv from 'dotenv'

dotenv.config()

const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
const SPACE = process.env.CONTENTFUL_SPACE_ID
const URL = `${process.env.CONTENTFUL_URL}${SPACE}`

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [URL]: {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    },
  ],
  documents: ['src/graphql/**/*.ts', 'src/**/*.tsx'],
  generates: {
    '@types/gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
