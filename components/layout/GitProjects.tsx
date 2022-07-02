import * as React from 'react'
import { useState, useEffect } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { fetchRepos } from 'lib/fetchFromGitHub'
import RepoCard from '@components/GitHubRepoCard'
import { GitProjects, gitRepoInfo } from 'types/types'

interface props {
  projects: GitProjects[]
}

const GitProjects: React.VFC<props> = ({ projects }) => {
  const [repos, setRepos] = useState<gitRepoInfo[]>()

  useEffect(() => {
    const getRepos = async (repoUrls: GitProjects[]) => {
      const fetchedRepos = await fetchRepos(repoUrls)

      setRepos(fetchedRepos)
    }

    getRepos(projects)
  }, [projects])

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={'0.5em'}>
      {repos?.map((repo) => (
        <RepoCard
          key={repo.title}
          title={repo.title}
          url={repo.url}
          description={repo.description}
          language={repo.language}
          stars={repo.stars}
          forks={repo.forks}
          localPage={repo.localPage}
        />
      ))}
    </SimpleGrid>
  )
}

export default GitProjects
