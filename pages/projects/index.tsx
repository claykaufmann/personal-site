import * as React from 'react'
import NextLink from 'next/link'
import Base from '@components/layout/Base'
import { Text, Heading, SimpleGrid, Box, Link } from '@chakra-ui/react'
import Project from '@components/layout/Project'
import { ProjectInfo } from 'types/types'
import { getAllProjects } from 'lib/handleProjects'

type Props = {
	projects: ProjectInfo[]
}

const Projects = ({ projects }: Props) => {
	return (
		<Base headerColor='black'>
			<Box padding='1em'>
				<Heading size='lg'>Projects</Heading>
				<Text>Find all of my projects here.</Text>
				<SimpleGrid columns={[2, null, 3, 4]}>
					{projects.map((project) => (
						<NextLink href={`projects/${project.slug}`}>
							<Link>
								<Project key={project.slug} title={project.title} description={project.title} />
							</Link>
						</NextLink>
					))}
				</SimpleGrid>
			</Box>
		</Base>
	)
}

export default Projects

export const getStaticProps = async () => {
	// call collect project handlers

	const projects = getAllProjects()


	return {
		props: { projects },
	}

}
