import * as React from 'react'
import Head from 'next/head'
import Base from '@components/layout/Base'
import { HStack, Heading, Box, Link, Center } from '@chakra-ui/react'
import { getAllProjects, getProjectBySlug, markdownToHtml } from 'lib/handleProjects'
import { ProjectInfo } from 'types/types'
import NextLink from 'next/link'
import ProjectBody from '@components/layout/ProjectBody'

type Props = {
	project: ProjectInfo
	content: string
}

const ProjectPage = ({ project, content }: Props) => {
	let githubLink = ''
	let gitInfo;

	if (project.github !== undefined) {
		githubLink = project.github
		gitInfo = (
			<NextLink href={githubLink} passHref={true} >
				<Link isExternal={true}>Check this project out on GitHub!</Link>
			</NextLink >
		)
	}


	return (
		<Base headerColor='black'>
			<Head>
				<title>{project.title}</title>
			</Head>
			<Box>

				<Heading size='lg'>{project.title}</Heading>
				<ProjectBody content={content} />
				<Center>
					<HStack>
						<Box border='1px solid black' borderRadius='4px' padding='0.5em'>
							<NextLink href='/projects'>
								<Link>Back to projects</Link>
							</NextLink>
						</Box>
						<Box border='1px solid black' borderRadius='4px' padding='0.5em'>
							<div>
								{gitInfo}
							</div>
						</Box>
					</HStack>
				</Center>
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
