import type { NextPage } from 'next'
import { Button, Center, Container, Flex, SimpleGrid, Text, Title } from '@mantine/core'
import { Feature } from '~/components'
import { mockdata } from '~/mocks/techs'

const Home: NextPage = () => {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />)
  return (
    <>
      <Container>
        <Center mt={'xl'}>
          <Flex direction={'column'} align={'center'}>
            <Title mb={'md'}>Next Enterprise Boilerplate</Title>
            <Text ta={'center'}>
              Welcome to the Next.js Enterprise Boilerplate, an open-source template for enterprise projects! It's
              loaded with features that'll help you build a high-performance, maintainable, and enjoyable app. We've
              done all the heavy lifting for you, so sit back, relax, and get ready to conquer the world with your
              incredible app! 🌍
            </Text>
          </Flex>
        </Center>
      </Container>

      <Container mt={30} mb={30} size="lg">
        <Center>
          <Button variant={'light'}>Use this template</Button>
        </Center>
      </Container>

      <Container mt={30} mb={30} size="lg">
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
          {items}
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Home
