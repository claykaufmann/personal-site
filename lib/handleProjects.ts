import { ProjectInfo } from '../types/types'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const projectDirectory = join(process.cwd(), 'projects')

export const markdownToHtml = async (markdown: string): Promise<string> => {
	const res = await remark().use(html).process(markdown)
	return res.toString()
}

export const getProjectSlugs = () => {
	const files = fs.readdirSync(projectDirectory)

	const slugs: string[] = []

	files.forEach((file) => {
		slugs.push(file.replace(/\.md$/, ''))
	})

	return slugs
}

export const getProjectBySlug = (slug: string): ProjectInfo => {
	// call readfilesync with slug
	const path = join(projectDirectory, `${slug}.md`)

	// get file contents
	const contents = fs.readFileSync(path, 'utf8')

	// use gray matter to parse
	const { data, content } = matter(contents)

	// if github is undefined, don't return an object with it
	if (data.github === undefined) {
		return {
			slug: slug,
			title: data.title,
			description: data.description,
			content: content
		}
	}

	// return project info
	return {
		slug: slug,
		title: data.title,
		description: data.description,
		github: data.github,
		content: content
	}
}

export const getAllProjects = (): ProjectInfo[] => {
	const slugs = getProjectSlugs()

	const projects: ProjectInfo[] = []

	slugs.forEach((slug) => {
		projects.push(getProjectBySlug(slug))
	})

	return projects
}