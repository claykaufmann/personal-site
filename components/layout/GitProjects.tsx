import * as React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import RepoCard from '@components/GitHubRepoCard'
import { gitRepoInfo } from 'types/types'

interface props {
  repos: gitRepoInfo[]
}

const GitProjects = ({ repos }: props) => {
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={'1em 5em'}>
      {repos.map((repo) => (
        <RepoCard
          key={repo.title}
          title={repo.title}
          gitURL={repo.gitURL}
          description={repo.description}
          language={repo.language}
          stars={repo.stars}
          forks={repo.forks}
          localURL={repo.localURL}
          color={repo.color}
        />
      ))}
    </SimpleGrid>
  )
}

export default GitProjects
