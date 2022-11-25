import * as React from 'react'
import { GetStaticProps, NextPage } from 'next'
import {
  Heading,
  VStack,
  Center,
  Box,
  Text,
  Icon,
  Link,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import Head from 'next/head'
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'
import styles from '../styles/Home.module.scss'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import GitProjects from '@components/layout/GitProjects'
import { getAllProjects } from 'lib/handleProjects'
import { gitRepoInfo } from 'types/types'
import { fetchRepos } from 'lib/fetchFromGitHub'
import ExperienceCard from '@components/layout/ExperienceCard'
import EducationCard from '@components/layout/EducationCard'
import Image from 'next/image'
import jayPeakPano from 'public/images/main-pano-1.jpg'
import shasta from 'public/images/photo-8647.jpg'
import craterLake from 'public/images/crater-1.jpg'
import nectars from 'public/images/main-landscape-4.jpg'

interface props {
  repos: gitRepoInfo[]
}

const Home: NextPage<props> = ({ repos }) => {
  // refs that are scrolled to in the home page
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const expRef = React.useRef<HTMLDivElement>(null)
  const topRef = React.useRef<HTMLDivElement>(null)
  const photoRef = React.useRef<HTMLDivElement>(null)

  // a function to handle scrolling to a ref
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.splash} ref={topRef}>
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
                  top="52vh"
                  role="group"
                  onClick={() => scrollToRef(aboutRef)}
                  cursor="pointer"
                  display="flex"
                  flexDir="column"
                  transition="ease 0.5s"
                  _hover={{ transform: 'translate(0, 5px)' }}
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
          <Box
            marginTop={'1em'}
            marginLeft={['2em', '4em', '8em']}
            marginRight={['2em', '4em', '8em']}
          >
            <Heading>About</Heading>
            <Text>
              I was born and raised just north of San Francisco, in Marin
              County. Being the son of a software engineer, I had no option but
              to embrace computers and what they could do. From a young age, I
              quickly took a deep interest in computing, and as a result, when I
              got to college, I decided to pursue computer science and software
              engineering.
            </Text>
            <br />
            <Text>
              Fast forward to the present, and I am currently a Master&apos;s
              candidate at the University of Vermont, where I continue to study
              computer science. My main interests within the CS field revolve
              around the intersection of networking, DevOps, and general systems
              programming. My expected graduation date is December 2022. Upon my
              graduation, I will be joining Beta Technologies as a data
              engineering intern.
            </Text>
          </Box>

          <Box
            marginTop={'1em'}
            marginLeft={['2em', '4em', '8em']}
            marginRight={['2em', '4em', '8em']}
          >
            <Heading marginBottom={'0.2em'}>Development</Heading>
            <Text marginBottom={'0.4em'}>
              See more at{' '}
              <Link
                href="https://github.com/claykaufmann"
                color="#0366d6"
                isExternal={true}
              >
                my github profile
              </Link>{' '}
              or view write-ups about the projects by clicking on the respective
              project below.
            </Text>
            <GitProjects repos={repos} />
          </Box>
          <VStack paddingTop={'1em'}>
            <Box
              role="group"
              onClick={() => scrollToRef(photoRef)}
              cursor="pointer"
              display="flex"
              flexDir="column"
              transition="ease 0.5s"
              _hover={{ transform: 'translate(0, 5px)' }}
              textAlign="center"
            >
              <Text
                textAlign="center"
                color="black"
                fontSize="130%"
                _groupHover={{ color: '#34495e' }}
                marginBottom={-3}
              >
                Photography
              </Text>
              <Icon
                alignSelf="center"
                color="black"
                as={BsChevronCompactDown}
                fontSize="250%"
                _groupHover={{ color: '#34495e' }}
              ></Icon>
            </Box>
          </VStack>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.mainContent} id="photo-section" ref={photoRef}>
          <Box
            marginTop={'1em'}
            marginLeft={['2em', '4em', '8em']}
            marginRight={['2em', '4em', '8em']}
          >
            <Link
              href="https://photo.claykaufmann.com"
              isExternal={true}
              textDecor={'none'}
              textColor={'black'}
              _hover={{ textDecoration: 'none' }}
            >
              <Heading>Photography</Heading>
              <Text>
                I am an avid photographer outside of the coding world! Visit{' '}
                <span style={{ color: '#0366d6' }}>photo.claykaufmann.com</span>{' '}
                to see my photography!
              </Text>

              <Grid
                templateRows={['repeat(5)', 'repeat(2)']}
                templateColumns={[
                  'repeat(1, 1fr)',
                  'repeat(1, fr)',
                  'repeat(3, 1fr)',
                ]}
                gap={4}
              >
                <GridItem rowSpan={2} display={['none', 'none', 'inline']}>
                  <Image alt={'mt shasta'} src={shasta} />
                </GridItem>
                <GridItem colSpan={2} display={['none', 'none', 'inline']}>
                  <Image alt={'jay peak'} src={jayPeakPano} />
                </GridItem>
                <GridItem>
                  <Image alt={'crater lake sunrise'} src={craterLake} />
                </GridItem>
                <GridItem>
                  <Image alt={'nectars bar, burlington vt'} src={nectars} />
                </GridItem>
              </Grid>
            </Link>
          </Box>
          <VStack paddingTop={'1em'}>
            <Box
              role="group"
              onClick={() => scrollToRef(expRef)}
              cursor="pointer"
              display="flex"
              flexDir="column"
              transition="ease 0.5s"
              _hover={{ transform: 'translate(0, 5px)' }}
              textAlign="center"
            >
              <Text
                textAlign="center"
                color="black"
                fontSize="130%"
                _groupHover={{ color: '#34495e' }}
                marginBottom={-3}
              >
                Experience
              </Text>
              <Icon
                alignSelf="center"
                color="black"
                as={BsChevronCompactDown}
                fontSize="250%"
                _groupHover={{ color: '#34495e' }}
              ></Icon>
            </Box>
          </VStack>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.mainContent} id="exp-section" ref={expRef}>
          <Box
            marginLeft={['2em', '4em', '8em']}
            marginRight={['2em', '4em', '8em']}
          >
            {/* <HStack align={'start'} justify={'space-between'}> */}
            <Flex
              flexDirection={['column', 'column', 'row']}
              justify={'space-between'}
              marginTop={'1em'}
            >
              <Box flex={1}>
                <Heading>Experience</Heading>
                {/* add resume experience here... */}
                <ExperienceCard
                  positionTitle="Team Member/Data Engineer"
                  company="Beta Technologies"
                  companyURL="https://beta.team"
                  timeWorked="Starting January 2023"
                  description="Work with real flight data from the ALIA experimental aircraft in order to drive development in the plane."
                />

                <ExperienceCard
                  positionTitle="Software Engineering Intern"
                  company="Precision Bioassay"
                  companyURL="https://www.precisionbioassay.com"
                  timeWorked="August 2022 - Present"
                  description="General PHP development, maintaining core product Xymp - bioassay/statistics software"
                />

                <ExperienceCard
                  positionTitle="Research Assistant"
                  company="the University of Vermont"
                  companyURL="https://www.uvm.edu"
                  timeWorked="January 2022 - August 2022"
                  description="Leverage deep convolutional neural networks in order to detect anomalies in time-series data from a rivershed in Danville Vermont. Worked with professor Byung S. Lee."
                />

                <ExperienceCard
                  positionTitle="Software Engineering Intern"
                  company="NASA Goddard Space Flight Center"
                  companyURL="https://www.nasa.gov/goddard"
                  timeWorked="August 2021 - December 2021"
                  description="Help develop the citizen science game GRASP - Game and Repository for Aperture Solutions and Patterns"
                />

                <ExperienceCard
                  positionTitle="Software Engineering Intern"
                  company="Systems and Software/Harris Computer"
                  companyURL="https://www.ssivt.com"
                  timeWorked="May 2021 - August 2021"
                  description="Write scripts to help automate the migration of core software product enQuesta onto new machines and systems."
                />
              </Box>
              <Box flex={1}>
                <Heading>Education</Heading>
                <EducationCard
                  university="University of Vermont"
                  major="Masters of Computer Science"
                  degreeName="MSCS"
                  graduated="December 2022"
                  univURL="https://www.uvm.edu/"
                  description="Focused on machine learning, master's project was with professor Byung Lee."
                />

                <EducationCard
                  university="University of Vermont"
                  major="Bachelors of Computer Science"
                  degreeName="BSCS"
                  graduated="December 2021"
                  univURL="https://www.uvm.edu/"
                  description="GPA 3.51"
                />
              </Box>
            </Flex>
            <Text>
              You can also find a pdf version of my resume{' '}
              <Link
                href="other/John-Clay-Kaufmann-website.pdf"
                isExternal={true}
                color="#0366d6"
              >
                here
              </Link>
              .
            </Text>
          </Box>
        </div>
        <VStack>
          <Box
            role="group"
            onClick={() => scrollToRef(topRef)}
            cursor="pointer"
            display="flex"
            position={'relative'}
            top={0}
            flexDir="column"
            transition="ease 0.5s"
            _hover={{ transform: 'translate(0, -5px)' }}
          >
            <Icon
              alignSelf="center"
              color="black"
              as={BsChevronCompactUp}
              fontSize="250%"
              _groupHover={{ color: '#34495e' }}
              marginBottom={-3}
            ></Icon>
            <Text
              textAlign="center"
              color="black"
              fontSize="100%"
              _groupHover={{ color: '#34495e' }}
            >
              Back to top
            </Text>
          </Box>
        </VStack>
        <Footer textColor="black" />
      </div>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects()

  const repos = await fetchRepos(
    projects.map((project) => {
      return project
    })
  )

  return {
    props: { repos },
  }
}
