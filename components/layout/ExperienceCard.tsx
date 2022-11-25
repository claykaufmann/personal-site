import * as React from 'react'
import { Heading, Box, Text, Link } from '@chakra-ui/react'

interface props {
  positionTitle: string
  company: string
  companyURL: string
  timeWorked: string
  description: string
}

const ExperienceCard = ({
  positionTitle,
  company,
  companyURL,
  timeWorked,
  description,
}: props) => {
  return (
    <Box marginBottom={'1em'}>
      <Heading size="md">
        {positionTitle} @{' '}
        <Link href={companyURL} isExternal={true} color="#0366d6">
          {company}
        </Link>
      </Heading>
      <Text as={'i'}>{timeWorked}</Text>
      <Text>{description}</Text>
    </Box>
  )
}

export default ExperienceCard
