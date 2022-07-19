import { ProjectInfo } from '../types/types'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { isNotJunk } from 'junk'

const projectDirectory = join(process.cwd(), 'projects')

export const getProjectSlugs = (): string[] => {
  const files = fs.readdirSync(projectDirectory)

  const filteredFiles = files.filter(isNotJunk)

  const slugs: string[] = []

  filteredFiles.forEach((file) => {
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

  // return project info
  return {
    slug: slug,
    title: data.title,
    description: data.description,
    githubURL: data.githubURL,
    githubAPI: data.githubAPI,
    content: content,
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
