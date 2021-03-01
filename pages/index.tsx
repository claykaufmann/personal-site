import * as React from 'react'
import Base from '@components/layout/Base'
import Footer from '@components/layout/Footer'
import { NextPage } from 'next'
import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react'
import styles from './index.module.scss'
import Header from '@components/layout/Header'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <div className={styles.landingPage}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.mainContent}>
          <Center h='40vh' className={styles.centerText}>
            <VStack>
              <Heading size='lg'>Hey there!</Heading>
              <Text>
                My name is Clay Kaufmann, and I an endeavoring software engineer, studying computer
                science at the University of Vermont.
              </Text>
            </VStack>
          </Center>
        </div>
        <Center className={styles.buttonContainer}>
          <Button className={styles.aboutButton}>About me.</Button>
        </Center>
        <Footer />
      </div>
      <div className={styles.aboutSection}>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Home
