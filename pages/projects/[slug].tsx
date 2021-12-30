import * as React from 'react'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import Base from '@components/layout/Base'
import { HStack, Heading, Box, Link, Center } from '@chakra-ui/react'
import {
  getAllProjects,
  getProjectBySlug,
  markdownToHtml,
} from 'lib/handleProjects'
import { ProjectInfo } from 'types/types'
import NextLink from 'next/link'
import ProjectBody from '@components/layout/ProjectBody'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type Props = {
  project: ProjectInfo
  content: string
}

const ProjectPage: NextPage<Props> = ({ project, content }) => {
  let githubLink = ''
  let gitInfo

  if (project.github !== undefined) {
    githubLink = project.github
    gitInfo = (
      <NextLink href={githubLink} passHref={true}>
        <Link isExternal={true}>Check this project out on GitHub!</Link>
      </NextLink>
    )
  }

  return (
    <Base headerColor="black">
      <Head>
        <title>{project.title}</title>
      </Head>
      <Box>
        <Heading size="lg">{project.title}</Heading>
        <ProjectBody content={content} />
        <Center>
          <HStack>
            <Box border="1px solid black" borderRadius="4px" padding="0.5em">
              <NextLink href="/projects">
                <Link>Back to projects</Link>
              </NextLink>
            </Box>
            <Box border="1px solid black" borderRadius="4px" padding="0.5em">
              <div>{gitInfo}</div>
            </Box>
          </HStack>
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
