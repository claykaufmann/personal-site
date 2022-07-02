import * as React from 'react'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import Base from '@components/layout/Base'
import { Heading, Box, Center } from '@chakra-ui/react'
import {
  getAllProjects,
  getProjectBySlug,
  markdownToHtml,
} from 'lib/handleProjects'
import { ProjectInfo } from 'types/types'
import ProjectBody from '@components/layout/ProjectBody'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import ProjectButtons from '@components/ProjectButtons'

type Props = {
  project: ProjectInfo
  content: string
}

const ProjectPage: NextPage<Props> = ({ project, content }) => {
  return (
    <Base headerColor="black">
      <Head>
        <title>{project.title}</title>
      </Head>
      <Box>
        <Center>
          <Heading size="lg" paddingBottom="0.5em">
            {project.title}
          </Heading>
        </Center>
        <ProjectBody content={content} />
        <Center paddingTop="1em">
          <ProjectButtons github={project.githubURL} />
        </Center>
      </Box>
    </Base>
  )
}

export default ProjectPage

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const project = getProjectBySlug(slug)

  const content = await markdownToHtml(project.content)

  return {
    props: {
      project,
      content,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = getAllProjects()

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}
