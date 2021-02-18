import * as React from 'react'
import { NextPage } from 'next'
import Base from '../components/layout/Base'

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <Base>
                <h2>Index page!</h2>
            </Base>
        </React.Fragment>
    )
}
export default Home
