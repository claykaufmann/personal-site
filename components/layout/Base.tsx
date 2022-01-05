import * as React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from './Base.module.scss'

interface props {
	headerColor: string
}

const Base: React.FC<props> = (Props, { headerColor }) => {
	return (
		<React.Fragment>
			<Header textColor={headerColor} />
			<div className={styles.content}>{Props.children}</div>
			<Footer textColor='black' />
		</React.Fragment>
	)
}
export default Base
