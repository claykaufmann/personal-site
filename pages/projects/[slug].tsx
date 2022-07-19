import * as React from 'react'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import Base from '@components/layout/Base'
import { Heading, Box, Center } from '@chakra-ui/react'
import { getAllProjects, getProjectBySlug } from 'lib/handleProjects'
import { markdownToHtml } from 'lib/handleMarkdown'
import ProjectBody from '@components/layout/ProjectBody'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import ProjectButtons from '@components/ProjectButtons'

type Props = {
  title: string
  githubURL?: string
  content: string
}

const ProjectPage: NextPage<Props> = ({ title, githubURL, content }) => {
  return (
    <Base headerColor="black">
      <Head>
        <title>{title}</title>
      </Head>
      <Box>
        <Center>
          <Heading size="lg" paddingBottom="0.5em">
            {title}
          </Heading>
        </Center>
        <ProjectBody content={content} />
        <Center paddingTop="1em">
          <ProjectButtons github={githubURL} />
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

  const title = project.title
  const githubURL = project.githubURL

  const content = await markdownToHtml(project.content)

  if (githubURL == undefined) {
    return {
      props: {
        title,
        content,
      },
    }
  }

  return {
    props: {
      title,
      githubURL,
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
