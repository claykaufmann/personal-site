import * as React from 'react'
import { Heading, Text, Box } from '@chakra-ui/react'

interface props {
  title: string
  description: string
  imageLink?: string
}

const Project: React.FC<props> = ({ title, description }) => {
  return (
    <Box padding="1em" border="1px solid black" borderRadius="5px" margin="1em">
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
    </Box>
  )
}

export default Project
