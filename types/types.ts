import { ParsedUrlQuery } from 'querystring'

export interface ProjectInfo {
  slug: string
  title: string
  description: string
  githubAPI?: string
  githubURL?: string
  language?: string
  content: string
}

export interface IParams extends ParsedUrlQuery {
  slug: string
}

export interface gitRepoInfo {
  title: string
  gitURL?: string
  localURL: string
  description: string
  language?: string
  stars?: number
  forks?: number
  color?: string
}
