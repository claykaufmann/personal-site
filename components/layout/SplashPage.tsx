import * as React from 'react'
import Footer from '@components/layout/Footer'
import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react'
import styles from './SplashPage.module.scss'
import Header from '@components/layout/Header'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface props {}
interface SplashState {
  scrollPosition: number
}

export default class SplashPage extends React.Component<props, SplashState> {
  private ref = React.createRef<HTMLDivElement>()

  constructor(props: props) {
    super(props)
    this.state = {
      scrollPosition: 0,
    }
  }

  handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  handleScrollToAbout = (): void => {
    window.scrollTo({ top: this.ref.current?.offsetTop, behavior: 'smooth' })
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.mainContent}>
            <Center h='40vh' className={styles.centerText}>
              <VStack>
                <Heading size='lg'>Hey there!</Heading>
                <Text>
                  My name is Clay Kaufmann, and I an endeavoring software engineer, studying
                  computer science at the University of Vermont.
                </Text>
              </VStack>
            </Center>
          </div>
          <Center className={styles.buttonContainer}>
            <Button className={styles.aboutButton} onClick={this.handleScrollToAbout}>
              About me.
            </Button>
          </Center>
          <Footer />
        </div>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <Text>
              Growing up in San Francisco, I have always been surrounded by software development and
              innovation. This was quickly instilled in me by my mother, who is a software
              engineering manager.
            </Text>
          </div>
          <Center className={styles.buttonContainer} ref={this.ref}>
            <Button className={styles.aboutButton} onClick={this.handleScrollToTop}>
              Back to top
            </Button>
          </Center>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}
