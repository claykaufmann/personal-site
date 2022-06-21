import * as React from 'react'
import { NextPage } from 'next'
import {
  Heading,
  VStack,
  Center,
  Box,
  Button,
  Text,
  Link,
} from '@chakra-ui/react'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.splash}>
        <Head>
          <title>Clay Kaufmann</title>
        </Head>
        <Header textColor="white" />
        <div className={styles.mainContent}>
          <Box>
            <Center h="25vh">
              <VStack align="center">
                <Box
                  textAlign="center"
                  color="white"
                  padding="2rem"
                  borderRadius="5px"
                  margin={{
                    base: '0 1rem',
                    sm: '0 5rem',
                    md: '0 10rem',
                    lg: '0 15rem',
                    xl: '0 20rem',
                  }}
                >
                  <Heading size="lg" opacity="1">
                    <span role="img" aria-label="Wave emoji">
                      &#128075;
                    </span>
                    &nbsp;Hey There! I&apos;m Clay.
                  </Heading>
                  <Text>Developer, photographer, explorer.</Text>
                </Box>
                <Button>ABOUT</Button>
              </VStack>
            </Center>
          </Box>
        </div>
        <Footer textColor="white" />
      </div>
      <div className={styles.container}>
        <div className={styles.mainContent} id="about-section">
          <Box margin="0.5em 2em">
            <Heading>About</Heading>
            <Text>
              I am currently a Master&apos;s candidate at the University of
              Vermont, where I study CS. My main interests within the CS field
              revolve around the intersection of networking, DevOps, and general
              systems programming. My expected graduation is December 2022,
              after which I plan to enter the software engineering industry. If
              you are interested, let&apos;s{' '}
              <Link href="mailto:claykaufmann@gmail.com" color="blue">
                get in touch.
              </Link>
            </Text>
          </Box>
        </div>
        <Footer textColor="black" />
      </div>
    </>
  )
}

export default Home
