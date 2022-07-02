import * as React from 'react'
import { useState, useEffect } from 'react'
import { fetchRepos, gitRepoInfo } from 'lib/fetchFromGitHub'
import RepoCard from '@components/GitHubRepoCard'

interface props {
  repoUrls: string[]
}

const Projects: React.VFC<props> = ({ repoUrls }) => {
  const [repos, setRepos] = useState<gitRepoInfo[]>()

  useEffect(() => {
    const getRepos = async (repoUrls: string[]) => {
      const fetchedRepos = await fetchRepos(repoUrls)

      setRepos(fetchedRepos)
    }

    getRepos(repoUrls)
  }, [repoUrls])

  return (
    <>
      {repos?.map((repo) => (
        <RepoCard
          key={repo.title}
          title={repo.title}
          url={repo.url}
          description={repo.description}
          language={repo.language}
          stars={repo.stars}
          forks={repo.forks}
        />
      ))}
    </>
  )
}

export default Projects
