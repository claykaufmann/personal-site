import { ProjectInfo } from "@/types/types";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectDirectory = join(process.cwd(), "projects");

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(projectDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getProjectBySlug(slug: string): ProjectInfo {
  const path = join(projectDirectory, `${slug}.md`);
  const contents = fs.readFileSync(path, "utf8");
  const { data, content } = matter(contents);

  return {
    slug,
    title: data.title,
    description: data.description,
    githubURL: data.githubURL,
    githubAPI: data.githubAPI,
    language: data.language,
    content,
  };
}

export function getAllProjects(): ProjectInfo[] {
  return getProjectSlugs().map((slug) => getProjectBySlug(slug));
}
