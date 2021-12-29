import { ParsedUrlQuery } from "querystring";

export interface ProjectInfo {
	slug: string,
	title: string,
	description: string,
	github?: string
	content: string
}

export interface IParams extends ParsedUrlQuery {
	slug: string
}
