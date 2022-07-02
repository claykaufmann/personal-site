// fetch information from github
import { GitProjectsHome, gitRepoInfo } from 'types/types'

const fetchRepos = async (
  reposInfo: GitProjectsHome[]
): Promise<gitRepoInfo[]> => {
  // map everything together
  const repos = await Promise.all(
    reposInfo.map(async (repo) => {
      // fetch data, add it
      const res = await fetch(repo.gitAPIUrl)

      const data = await res.json()

      const info: gitRepoInfo = {
        title: data.name,
        url: data.html_url,
        description: data.description,
        language: data.language,
        stars: data.stargazers_count,
        forks: data.forks_count,
        localPage: repo.localProjectUrl,
      }

      return info
    })
  )

  return repos
}

export { fetchRepos }
