import * as React from 'react'
import Base from '@components/layout/Base'
import { Heading, Box } from '@chakra-ui/react'
import { ProjectInfo } from 'types/types'
import { getAllProjects } from 'lib/handleProjects'
import GitProjects from '@components/layout/GitProjects'
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'

interface Props {
  projects: ProjectInfo[]
}

const ProjectsIndex: NextPage<Props> = ({ projects }) => {
  return (
    <Base headerColor="black">
      <Head>
        <title>Development</title>
      </Head>
      <Box padding="1em">
        <Heading size="lg" marginLeft="1em">
          Development
        </Heading>
        <GitProjects
          projects={projects.map((project) => {
            return {
              localProjectUrl: `projects/${project.slug}`,
              gitAPIUrl: project.githubAPI,
            }
          })}
        />
      </Box>
    </Base>
  )
}

export default ProjectsIndex

export const getStaticProps: GetStaticProps = async () => {
  // call collect project handlers

  const projects = getAllProjects()

  return {
    props: { projects },
  }
}
