import * as React from 'react'
import { Button, ButtonGroup, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

type Props = {
  github?: string // a link to a github repo
}

const ProjectButtons = ({ github }: Props) => {
  let gitInfo

  if (github != undefined) {
    gitInfo = (
      <NextLink href={github} passHref={true}>
        <Link isExternal={true} style={{ textDecoration: 'none' }}>
          <Button
            border="1px solid black"
            borderRadius="4px"
            padding="0.5em"
            as="button"
          >
            GitHub
          </Button>
        </Link>
      </NextLink>
    )
  }

  return (
    <ButtonGroup>
      <NextLink href="/projects">
        <Link style={{ textDecoration: 'none' }}>
          <Button
            border="1px solid black"
            borderRadius="4px"
            padding="0.5em"
            as="button"
          >
            Back to projects{' '}
          </Button>
        </Link>
      </NextLink>
      {gitInfo}
    </ButtonGroup>
  )
}

export default ProjectButtons
