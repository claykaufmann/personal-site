// fetch information from github
import { gitRepoInfo, ProjectInfo } from 'types/types'

const fetchRepos = async (reposInfo: ProjectInfo[]): Promise<gitRepoInfo[]> => {
  // map everything together
  const repos = await Promise.all(
    reposInfo.map(async (repo) => {
      const colorRes = await fetch(
        'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
      )
      const fetchedColors = await colorRes.json()

      if (repo.githubAPI) {
        // fetch repo data, add it
        const res = await fetch(repo.githubAPI)
        const data = await res.json()

        // fetch color data
        let color = ''

        // if we hit the github api req limit, and color doesn't exist, just set it to be blue as a fallback
        // should only happen in development
        try {
          color = fetchedColors[data.language].color
        } catch (e) {
          color = 'blue'
        }

        // return info object
        return {
          title: data.name,
          url: data.html_url,
          localURL: `projects/${repo.slug}`,
          description: data.description,
          language: data.language,
          stars: data.stargazers_count,
          forks: data.forks_count,
          color: color,
        }
      } else if (repo.language) {
        // we need to handle non git functions, we just set these all to be done
        const color = fetchedColors[repo.language].color

        return {
          title: repo.title,
          description: repo.description,
          localURL: `projects/${repo.slug}`,
          language: repo.language,
          stars: 0,
          forks: 0,
          color: color,
        }
      } else {
        return {
          title: repo.title,
          description: repo.description,
          localURL: `projects/${repo.slug}`,
          stars: 0,
          forks: 0,
        }
      }
    })
  )

  return repos
}

export { fetchRepos }
