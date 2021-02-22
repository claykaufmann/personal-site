import * as React from 'react'
import Base from '@components/layout/Base'
import { NextPage } from 'next'
import { Heading, Text } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Base>
      <Heading size='lg'>Hello!</Heading>
      <Text>My name is Clay. I am a Computer Science student at the University of Vermont</Text>
    </Base>
  )
}

export default Home
