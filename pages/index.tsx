import * as React from 'react'
import Base from '@components/layout/Base'
import { NextPage } from 'next'
import { Center, Heading, Text, VStack } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Base>
      <Center h='40vh'>
        <VStack>
          <Heading size='lg'>Hey there!</Heading>
          <Text>
            My name is Clay Kaufmann, and I an endeavoring software engineer, studying computer
            science at the University of Vermont.
          </Text>
        </VStack>
      </Center>
    </Base>
  )
}

export default Home
