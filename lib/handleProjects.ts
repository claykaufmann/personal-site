import { ProjectInfo } from '../types/types'

// export const getProjectSlugs = () => {

// }

// export const getProjectBySlug = (slug: string): ProjectInfo => {

// }

export const getAllProjects = (): ProjectInfo[] => {
	const project1: ProjectInfo = {
		title: "Test Project",
		description: "a project for testing that shows my coding prowess",
		content: "some content for the project",
		slug: "testProject1"
	}
	const project2: ProjectInfo = {
		title: "Test Project",
		description: "a project for testing that shows my coding prowess",
		content: "some content for the project",
		slug: "testProject2"
	}
	const project3: ProjectInfo = {
		title: "Test Project",
		description: "a project for testing that shows my coding prowess",
		content: "some content for the project",
		slug: "testProject3"
	}

	return [project1, project2, project3]
}
