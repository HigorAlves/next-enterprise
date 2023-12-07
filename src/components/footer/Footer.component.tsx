import React from 'react'
import { ActionIcon, Container, Flex, Group } from '@mantine/core'
import { IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react'
import { Logo } from '~/components'

export function Footer() {
  return (
    <Container size={'lg'} pb={'xl'}>
      <Flex align={'center'} justify={'space-between'}>
        <Logo />

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="transparent" radius="xl" color={'white'}>
            <IconBrandInstagram size={18} stroke={1} />
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent" radius="xl" color={'white'}>
            <IconBrandLinkedin size={18} stroke={1} />
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent" radius="xl" color={'white'}>
            <IconBrandYoutube size={18} stroke={1} />
          </ActionIcon>
        </Group>
      </Flex>
    </Container>
  )
}
