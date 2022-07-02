// fetch information from github
import { GitProjectsInterface, gitRepoInfo } from 'types/types'

const fetchRepos = async (
  reposInfo: GitProjectsInterface[]
): Promise<gitRepoInfo[]> => {
  // map everything together
  const repos = await Promise.all(
    reposInfo.map(async (repo) => {
      // fetch repo data, add it
      const res = await fetch(repo.gitAPIUrl)
      const data = await res.json()

      // fetch color data
      const colorRes = await fetch(
        'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
      )
      const fetchedColors = await colorRes.json()
      const color = fetchedColors[data.language].color

      const info: gitRepoInfo = {
        title: data.name,
        url: data.html_url,
        description: data.description,
        language: data.language,
        stars: data.stargazers_count,
        forks: data.forks_count,
        localPage: repo.localProjectUrl,
        color: color,
      }

      return info
    })
  )

  return repos
}

export { fetchRepos }
