import * as React from 'react'
import Base from '@components/layout/Base'
import { NextPage } from 'next'
import { Heading, Text } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Base>
      <Heading size='lg'></Heading>
      <Text>
        Hello! My name is Clay Kaufmann. I am studying computer science at the University of
        Vermont.
      </Text>
    </Base>
  )
}

export default Home
