import * as React from 'react'
import { Heading, Box, Text, Link } from '@chakra-ui/react'

interface props {
  positionTitle: string
  company: string
  companyURL: string
  timeWorked: string
  description: string
}

const ExperienceCard: React.FC<props> = ({
  positionTitle,
  company,
  companyURL,
  timeWorked,
  description,
}) => {
  return (
    <Box>
      <Heading size="md">
        {positionTitle} @{' '}
        <Link href={companyURL} isExternal={true}>
          {company}
        </Link>
      </Heading>
      <Text as={'i'}>{timeWorked}</Text>
      <Text>{description}</Text>
    </Box>
  )
}

export default ExperienceCard
