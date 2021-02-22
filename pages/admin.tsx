import { Heading } from '@chakra-ui/react'
import Base from '@components/layout/Base'
import { NextPage } from 'next'
import * as React from 'react'

const Admin: NextPage = () => {
  return (
    <Base>
      <Heading size='lg'>Admin Page</Heading>
    </Base>
  )
}
export default Admin
