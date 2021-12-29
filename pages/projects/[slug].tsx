import * as React from 'react'
import Head from 'next/head'
import Base from '@components/layout/Base'
import { Text, Heading, Box, Link } from '@chakra-ui/react'
import { getAllProjects, getProjectBySlug, markdownToHtml } from 'lib/handleProjects'
import { ProjectInfo } from 'types/types'
import NextLink from 'next/link'

type Props = {
	project: ProjectInfo
	content: string
}

const ProjectPage = ({ project, content }: Props) => {
	return (
		<Base headerColor='black'>
			<Head>
				<title>{project.title}</title>
			</Head>
			<Box padding='1em'>
				<Heading size='lg'>{project.title}</Heading>
				<Text>{project.description}</Text>
				<div dangerouslySetInnerHTML={{ __html: content }} />

				<NextLink href='/projects'>
					<Link>Back to projects</Link>
				</NextLink>
			</Box>
		</Base>
	)
}

export default ProjectPage

type Params = {
	params: {
		slug: string
	}
}

export const getStaticProps = async ({ params }: Params) => {
	const project = getProjectBySlug(params.slug)

	const content = await markdownToHtml(project.content)

	return {
		props: {
			project,
			content
		}
	}
}


export const getStaticPaths = async () => {
	const projects = getAllProjects()

	return {
		paths: projects.map((project) => {
			return {
				params: {
					slug: project.slug
				}
			}
		}),
		fallback: false
	}
}
