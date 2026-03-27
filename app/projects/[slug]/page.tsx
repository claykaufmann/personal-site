import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Star, GitFork } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {
  getProjectSlugs,
  getProjectBySlug,
} from "@/lib/handleProjects";
import { fetchRepos } from "@/lib/fetchFromGitHub";
import { notFound } from "next/navigation";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Clay Kaufmann`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const repos = await fetchRepos([project]);
  const repo = repos[0];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Projects
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>

        <p className="mt-3 text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block size-3 rounded-full"
                style={{ backgroundColor: repo.color ?? "#ccc" }}
              />
              {repo.language}
            </span>
          )}

          {repo.stars > 0 && (
            <span className="flex items-center gap-1">
              <Star className="size-3.5" />
              {repo.stars}
            </span>
          )}

          {repo.forks > 0 && (
            <span className="flex items-center gap-1">
              <GitFork className="size-3.5" />
              {repo.forks}
            </span>
          )}

          {repo.githubURL && (
            <a
              href={repo.githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <ExternalLink className="size-3.5" />
              View on GitHub
            </a>
          )}
        </div>

        <hr className="my-8 border-border" />

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {project.content}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  );
}
