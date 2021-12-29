import * as React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Base from '@components/layout/Base'
import { Text, Heading, Box } from '@chakra-ui/react'
import { IParams, ProjectInfo } from '../../types/types'

const ProjectPage: NextPage = () => {
	return (
		<Base headerColor='black'>
			<Box padding='1em'>
				<Heading>Test project</Heading>
				<Text>Test Desc</Text>
			</Box>
		</Base>
	)
}

export default ProjectPage
