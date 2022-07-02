import * as React from 'react'
import { useState, useEffect } from 'react'
import { SimpleGrid, Link } from '@chakra-ui/react'
import { fetchRepos } from 'lib/fetchFromGitHub'
import RepoCard from '@components/GitHubRepoCard'
import { GitProjectsHome, gitRepoInfo } from 'types/types'

interface props {
  projects: GitProjectsHome[]
}

const GitProjectsHomePage: React.VFC<props> = ({ projects }) => {
  const [repos, setRepos] = useState<gitRepoInfo[]>()

  useEffect(() => {
    const getRepos = async (repoUrls: GitProjectsHome[]) => {
      const fetchedRepos = await fetchRepos(repoUrls)

      setRepos(fetchedRepos)
    }

    getRepos(projects)
  }, [projects])

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={'0.5em'}>
      {repos?.map((repo) => (
        <Link
          key={repo.title}
          style={{ textDecoration: 'none' }}
          href={repo.localPage ? repo.localPage : repo.url}
        >
          <RepoCard
            title={repo.title}
            url={repo.url}
            description={repo.description}
            language={repo.language}
            stars={repo.stars}
            forks={repo.forks}
          />
        </Link>
      ))}
    </SimpleGrid>
  )
}

export default GitProjectsHomePage
