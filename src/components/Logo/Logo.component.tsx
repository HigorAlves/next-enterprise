import React from 'react'
import { Flex } from '@mantine/core'
import Image from 'next/image'

export function Logo() {
  return (
    <Flex align={'center'}>
      <Image src={'/images/yourlogo.svg'} width={140} height={40} alt={'Logo for next enterprise logo'} />
    </Flex>
  )
}
