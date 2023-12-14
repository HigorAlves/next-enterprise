'use client'
import React from 'react'
import { AppShell, Burger, Container, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Logo } from '~/components'

export function Header() {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <AppShell.Header withBorder={false}>
      <Container size="lg" pt={'md'}>
        <Group justify={'space-between'}>
          <Logo />
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </Container>
    </AppShell.Header>
  )
}
