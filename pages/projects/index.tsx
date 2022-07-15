import * as React from 'react'
import Base from '@components/layout/Base'
import { Heading, Box } from '@chakra-ui/react'
import { getAllProjects } from 'lib/handleProjects'
import { gitRepoInfo } from 'types/types'
import { fetchRepos } from 'lib/fetchFromGitHub'
import GitProjects from '@components/layout/GitProjects'
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'

interface Props {
  repos: gitRepoInfo[]
}

const ProjectsIndex: NextPage<Props> = ({ repos }) => {
  return (
    <Base headerColor="black">
      <Head>
        <title>Development</title>
      </Head>
      <Box padding="0.5em 6em">
        <Heading size="lg" textAlign={'center'} paddingBottom={'0.2em'}>
          Development
        </Heading>
        <GitProjects repos={repos} />
      </Box>
    </Base>
  )
}

export default ProjectsIndex

export const getStaticProps: GetStaticProps = async () => {
  // call collect project handlers

  const projects = getAllProjects()

  const repos = await fetchRepos(
    projects.map((project) => {
      return project
    })
  )

  return {
    props: { repos },
  }
}
