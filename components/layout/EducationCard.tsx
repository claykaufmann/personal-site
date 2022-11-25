import * as React from 'react'
import { Heading, Box, Text, Link } from '@chakra-ui/react'

interface props {
  university: string
  major: string
  degreeName: string
  univURL: string
  graduated: string
  description: string
}

const EducationCard = ({
  university,
  major,
  graduated,
  univURL,
  description,
}: props) => {
  return (
    <Box marginBottom={'1em'}>
      <Heading size="md">
        {major} @{' '}
        <Link href={univURL} isExternal={true} color="#0366d6">
          {university}
        </Link>
      </Heading>
      <Text as={'i'}>Graduated {graduated}</Text>
      <Text>{description}</Text>
    </Box>
  )
}

export default EducationCard
