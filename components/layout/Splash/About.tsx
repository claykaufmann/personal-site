import * as React from 'react'
import { Text } from '@chakra-ui/react'
import Footer from '@components/layout/Footer'
import styles from './About.module.scss'
import { Link, animateScroll as scroll } from 'react-scroll'

const About: React.VFC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <Text>
          Growing up in San Francisco, I have always been surrounded by software development and
          innovation. This was quickly instilled in me by my mother, who is a software engineering
          manager.
        </Text>
      </div>
      <Footer />
    </div>
  )
}
export default About
