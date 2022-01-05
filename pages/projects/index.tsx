import * as React from 'react'
import NextLink from 'next/link'
import Base from '@components/layout/Base'
import { Heading, SimpleGrid, Box, Link } from '@chakra-ui/react'
import Project from '@components/layout/Project'
import { ProjectInfo } from 'types/types'
import { getAllProjects } from 'lib/handleProjects'
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'

interface Props {
  projects: ProjectInfo[]
}

const ProjectsIndex: NextPage<Props> = ({ projects }) => {
  return (
    <Base headerColor="black">
      <Head>
        <title>Projects</title>
      </Head>
      <Box padding="1em">
        <Heading size="lg" marginLeft="1em">
          Projects
        </Heading>
        <SimpleGrid columns={[2, null, 3, 4]}>
          {projects.map((project) => (
            <NextLink key={project.slug} href={`projects/${project.slug}`}>
              <Link>
                <Project
                  title={project.title}
                  description={project.description}
                />
              </Link>
            </NextLink>
          ))}
        </SimpleGrid>
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
