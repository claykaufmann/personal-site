export interface ProjectInfo {
  slug: string;
  title: string;
  description: string;
  githubAPI?: string;
  githubURL?: string;
  language?: string;
  content: string;
}

export interface GitRepoInfo {
  title: string;
  githubURL?: string;
  localURL: string;
  description: string;
  language?: string;
  stars: number;
  forks: number;
  color?: string;
}
