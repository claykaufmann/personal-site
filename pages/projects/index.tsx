import * as React from 'react'
import { NextPage } from 'next'
import Base from '@components/layout/Base'
import { Text, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Project from '@components/layout/Project'

const Projects: NextPage = () => {
	return (
		<Base headerColor='black'>
			<Box padding='1em'>
				<Heading size='lg'>Projects</Heading>
				<Text>Find all of my projects here.</Text>
				<SimpleGrid columns={[2, null, 3, 4]}>
					{/* GetStaticProps GitHub projects here  */}

					{/* will need to use the map function here */}

					{/* Manually added projects here */}

					<Project title='test project' description='This project exemplifies my how I code.' />
					<Project title='test project' description='This project exemplifies my how I code.' />
					<Project title='test project' description='This project exemplifies my how I code.' />
					<Project title='test project' description='This project exemplifies my how I code.' />

				</SimpleGrid>
			</Box>
		</Base>
	)
}

export default Projects
