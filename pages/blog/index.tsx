import * as React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import Base from '@components/layout/Base'
import Head from 'next/head'
import { BlogPost } from 'types/types'
import { getAllPosts } from 'lib/handleBlogPosts'

interface props {
  posts: BlogPost[]
}

const Blog: NextPage<props> = ({ posts }) => {
  return (
    <Base headerColor="black">
      <Head>
        <title>Blog</title>
      </Head>
      {posts.map((post) => (
        <Text key={post.title}>{post.title}</Text>
      ))}
    </Base>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  // collect all blog psots
  const posts = getAllPosts()

  return {
    props: { posts },
  }
}
