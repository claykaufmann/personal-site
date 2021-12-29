import { ParsedUrlQuery } from "querystring";

export interface ProjectInfo {
	slug: string,
	title: string,
	description: string,
	content: string
}

export interface IParams extends ParsedUrlQuery {
	slug: string
}
