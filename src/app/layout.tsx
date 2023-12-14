import 'tippy.js/animations/shift-toward.css'
import '@mantine/core/styles.css'

import { ReactNode } from 'react'
import { Metadata } from 'next'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

// eslint-disable-next-line camelcase
import { Sora, Source_Code_Pro, Space_Grotesk } from 'next/font/google'
import { DraftModeAlert } from '~/components/DraftModeAlert/DraftModeAlert.component'
import { Layout } from '~/layout/index.layout'

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
})

const code = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-grotesk',
})

export const metadata: Metadata = {
  title: 'Next Enterprise Boilerplate',
  description: 'Next Enterprise Boilerplate',
  openGraph: {
    type: 'website',
    description: 'Next Enterprise Boilerplate',
    locale: 'en_US',
    title: 'Higor Alves',
    images: ['%PUBLIC_URL%/fb-og-image.png'],
    url: 'https://higoralves.dev',
    siteName: 'Higor Alves',
  },
  twitter: {
    title: 'Next Enterprise Boilerplate',
    description: 'Next Enterprise Boilerplate',
    images: ['%PUBLIC_URL%/fb-og-image.png'],
    card: 'summary_large_image',
    creator: '@higoralves.dev',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${code.variable} ${grotesk.variable}`}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            primaryColor: 'violet',
            fontFamily: 'var(--font-sora), var(--font-grotesk)',
            fontFamilyMonospace: 'var(--font-code)',
          }}
          defaultColorScheme={'dark'}
        >
          <Layout
            layout={'basic'}
            main={
              <>
                <DraftModeAlert />
                {children}
              </>
            }
          />
        </MantineProvider>
      </body>
    </html>
  )
}
