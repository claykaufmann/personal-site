import { ParsedUrlQuery } from 'querystring'

export interface ProjectInfo {
  slug: string
  title: string
  description: string
  githubAPI: string
  githubURL: string
  content: string
}

export interface IParams extends ParsedUrlQuery {
  slug: string
}

export interface gitRepoInfo {
  title: string
  url: string
  description: string
  language: string
  stars: number
  forks: number
  localPage: string
  color: string
}

export interface GitProjectsInterface {
  localProjectUrl: string
  gitAPIUrl: string
}
