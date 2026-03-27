import type { Metadata } from "next";
import Link from "next/link";
import { Star, GitFork, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { getAllProjects } from "@/lib/handleProjects";
import { fetchRepos } from "@/lib/fetchFromGitHub";

export const metadata: Metadata = {
  title: "Projects | Clay Kaufmann",
  description: "Software projects by Clay Kaufmann",
};

export default async function ProjectsPage() {
  const projects = getAllProjects();
  const repos = await fetchRepos(projects);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-muted-foreground">
          A collection of software projects I&apos;ve worked on.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {repos.map((repo) => (
            <Link key={repo.localURL} href={`/${repo.localURL}`}>
              <Card className="h-full transition-shadow hover:ring-foreground/20">
                <CardHeader>
                  <CardTitle className="text-primary">{repo.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {repo.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1" />

                <CardFooter className="flex items-center gap-4 text-xs text-muted-foreground">
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
                    <span className="ml-auto flex items-center gap-1">
                      <ExternalLink className="size-3.5" />
                      GitHub
                    </span>
                  )}
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
