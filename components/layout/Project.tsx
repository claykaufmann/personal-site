import * as React from 'react'
import { Heading, Text, Box } from '@chakra-ui/react'

interface props {
  title: string
  description: string
  imageLink?: string
}

const Project = ({ title, description }: props) => {
  return (
    <Box
      maxW="sm"
      height={['9em', null, '7.5em']}
      borderWidth="1px"
      borderRadius="lg"
      borderColor="black"
      padding="1em"
      overflow="hidden"
      margin="1em"
    >
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
    </Box>
  )
}

export default Project
