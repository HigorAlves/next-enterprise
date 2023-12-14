import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(['true', 'false'])
      .optional()
      .transform((value) => value === 'true'),
    CONTENTFUL_SPACE_ID: z.string(),
    CONTENTFUL_ACCESS_TOKEN: z.string(),
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: z.string(),
    CONTENTFUL_MANAGEMENT_TOKEN: z.string(),
    CONTENTFUL_URL: z.string(),
    CONTENTFUL_ENVIRONMENT: z.string(),
    CONTENTFUL_PREVIEW_SECRET: z.string(),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    CONTENTFUL_MANAGEMENT_TOKEN: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    CONTENTFUL_URL: process.env.CONTENTFUL_URL,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_PREVIEW_SECRET: process.env.CONTENTFUL_PREVIEW_SECRET,
  },
})
