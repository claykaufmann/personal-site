import * as React from 'react'
import { NextPage } from 'next'
import {
  Heading,
  VStack,
  Center,
  Box,
  Text,
  Icon,
  Link,
} from '@chakra-ui/react'
import Head from 'next/head'
import { BsChevronCompactDown } from 'react-icons/bs'
import styles from '../styles/Home.module.scss'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'

const Home: NextPage = () => {
  const aboutRef = React.useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

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
                <Box
                  pos="relative"
                  top="50vh"
                  role="group"
                  onClick={handleScroll}
                  cursor="pointer"
                  display="flex"
                  flexDir="column"
                  transition="top ease 0.5s"
                  _hover={{ top: '50.4vh' }}
                  textAlign="center"
                >
                  <Text
                    textAlign="center"
                    color="white"
                    fontSize="130%"
                    _groupHover={{ color: 'gainsboro' }}
                    marginBottom={-3}
                  >
                    ABOUT
                  </Text>
                  <Icon
                    alignSelf="center"
                    color="white"
                    as={BsChevronCompactDown}
                    fontSize="250%"
                    _groupHover={{ color: 'gainsboro' }}
                  ></Icon>
                </Box>
              </VStack>
            </Center>
          </Box>
        </div>
        <Footer textColor="white" />
      </div>
      <div className={styles.container}>
        <div className={styles.mainContent} id="about-section" ref={aboutRef}>
          <Box margin="0.5em 2em">
            <Heading>About</Heading>
            <Text>
              I was born and raised just north of San Francisco, in Marin
              County. Being the son of a software engineer, I had no option but
              to embrace computers and what they could do. From a young age, I
              quickly embraced computers, and as a result, when I got to
              college, I decided to pursue computer science and software
              engineering.
            </Text>
            <br />
            <Text>
              Fast forward 4 years later, and I am currently a Master&apos;s
              candidate at the University of Vermont, where I continue to study
              computer science. My main interests within the CS field revolve
              around the intersection of networking, DevOps, and general systems
              programming. My expected graduation is December 2022, after which
              I plan to enter the software engineering industry. If you are
              interested, let&apos;s{' '}
              <Link href="mailto:claykaufmann@gmail.com" color="blue">
                get in touch.
              </Link>{' '}
              Upon entering the industry, I would like to get into the field of
              site reliability engineering, where my unique combination of
              interests within the software engineering realm would apply quite
              well.
            </Text>
          </Box>
        </div>
        <Footer textColor="black" />
      </div>
    </>
  )
}

export default Home
