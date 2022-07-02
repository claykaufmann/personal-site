// fetch information from github

interface gitRepoInfo {
  title: string
  url: string
  description: string
  language: string
  stars: number
  forks: number
}

const fetchRepos = async (repoUrls: [string]): Promise<gitRepoInfo[]> => {
  // map everything together
  const repos = await Promise.all(
    repoUrls.map(async (url) => {
      // fetch data, add it
      const res = await fetch(url)

      const data = await res.json()

      const info: gitRepoInfo = {
        title: data.name,
        url: data.html_url,
        description: data.description,
        language: data.language,
        stars: data.stargazers_count,
        forks: data.forks_count,
      }

      return info
    })
  )

  return repos
}

export type { gitRepoInfo }
export { fetchRepos }
