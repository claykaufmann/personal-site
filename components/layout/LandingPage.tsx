import * as React from 'react'
import Footer from '@components/layout/Footer'
import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react'
import styles from './LandingPage.module.scss'
import Header from '@components/layout/Header'

const LandingPage: React.VFC = () => {
  return (
    <div className={styles.container}>
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
  )
}
export default LandingPage
