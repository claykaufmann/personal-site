import * as React from 'react'
import { Container } from '@chakra-ui/react'
import styles from './ProjectBody.module.scss'

interface Props {
  content: string
}

const ProjectBody: React.FC<Props> = ({ content }) => {
  return (
    <Container maxW="container.lg">
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  )
}

export default ProjectBody
