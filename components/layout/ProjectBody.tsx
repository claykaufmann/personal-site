import * as React from 'react'
import styles from './ProjectBody.module.scss'

interface Props {
	content: string
}

const ProjectBody: React.FC<Props> = ({ content }) => {
	return (
		<React.Fragment>
			<div className={styles.markdown} dangerouslySetInnerHTML={{ __html: content }} />
		</React.Fragment>
	)

}

export default ProjectBody
