'use client'
import React from 'react'
import { AppShellHeader, Burger, Container, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Logo } from '~/components'

export function Header() {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <AppShellHeader withBorder={false}>
      <Container size="lg" pt={'md'}>
        <Group justify={'center'}>
          <Logo />
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </Container>
    </AppShellHeader>
  )
}
