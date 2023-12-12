'use client'
import { useEffect } from 'react'
import type { NextPage } from 'next'
import { Title } from '@mantine/core'
import contentfulClient from '~/services/contentful/client'

const Home: NextPage = () => {
  async function test() {
    const pages = await contentfulClient.getEntries<any>({
      include: 4,
      content_type: 'article',
    })

    console.log(pages)
  }

  useEffect(() => {
    test()
  })
  return (
    <>
      <Title>Next Enterprise Boilerplate</Title>
    </>
  )
}

export default Home
