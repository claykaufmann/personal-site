import { BlogPost } from 'types/types'
import fs from 'fs'
import { join } from 'path'
import { isNotJunk } from 'junk'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export const getPostSlugs = (): string[] => {
  const files = fs.readdirSync(postsDirectory)

  const filteredFiles = files.filter(isNotJunk)

  const slugs: string[] = []

  filteredFiles.forEach((file) => {
    slugs.push(file.replace(/\.md$/, ''))
  })

  return slugs
}

export const getPostBySlug = (slug: string): BlogPost => {
  const path = join(postsDirectory, `${slug}.md`)

  const contents = fs.readFileSync(path, 'utf8')

  const { data, content } = matter(contents)

  return {
    slug: slug,
    title: data.title,
    date: data.date,
    content: content,
  }
}

export const getAllPosts = (): BlogPost[] => {
  const slugs = getPostSlugs()

  const posts: BlogPost[] = []

  slugs.forEach((slug) => {
    posts.push(getPostBySlug(slug))
  })

  return posts
}
