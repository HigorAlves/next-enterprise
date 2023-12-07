import React from 'react'
import { Flex, Text } from '@mantine/core'
import Image from 'next/image'

export function Logo() {
  return (
    <Flex align={'center'}>
      <Image src={'/images/logo.svg'} width={40} height={40} alt={'Higor Alves logo'} />
      <Text c={'white'} pl={'sm'}>
        Higor Alves
      </Text>
    </Flex>
  )
}
