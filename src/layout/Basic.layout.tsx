import React from 'react'
import { AppShell, AppShellMain } from '@mantine/core'
import { Header } from '~/components'

interface Props {
  children: React.ReactNode
}

export function BasicLayout({ children }: Props) {
  return (
    <AppShell header={{ height: 70 }} footer={{ height: 80 }}>
      <Header />

      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}
