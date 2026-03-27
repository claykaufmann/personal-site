import { GitRepoInfo, ProjectInfo } from "@/types/types";

const COLORS_URL =
  "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";

export async function fetchRepos(
  reposInfo: ProjectInfo[]
): Promise<GitRepoInfo[]> {
  // Hoist the colors.json fetch — one request instead of one per repo
  const colorRes = await fetch(COLORS_URL, { next: { revalidate: 86400 } });
  const colors = await colorRes.json();

  return Promise.all(
    reposInfo.map(async (repo): Promise<GitRepoInfo> => {
      if (repo.githubAPI) {
        const res = await fetch(repo.githubAPI, {
          next: { revalidate: 3600 },
        });

        if (res.status !== 200) {
          return {
            title: repo.title,
            description: repo.description,
            localURL: `projects/${repo.slug}`,
            stars: 0,
            forks: 0,
          };
        }

        const data = await res.json();
        const color = colors[data.language]?.color;

        return {
          title: data.name,
          url: data.html_url,
          localURL: `projects/${repo.slug}`,
          description: data.description,
          language: data.language,
          stars: data.stargazers_count,
          forks: data.forks_count,
          color,
        };
      }

      if (repo.language) {
        const color = colors[repo.language]?.color;
        return {
          title: repo.title,
          description: repo.description,
          localURL: `projects/${repo.slug}`,
          language: repo.language,
          stars: 0,
          forks: 0,
          color,
        };
      }

      return {
        title: repo.title,
        description: repo.description,
        localURL: `projects/${repo.slug}`,
        stars: 0,
        forks: 0,
      };
    })
  );
}
