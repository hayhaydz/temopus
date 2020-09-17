import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'

const NotFound = () => {
    return (
        <Layout customTitle="404 Not found" >
            <section className="NotFound" >
                <h1 className="NotFound__heading heading">404 Not Found</h1>
                <h2 className="NotFound__subheading">It looks like you're lost. Let me help you find your way back!</h2>
                <Link to={`/`} className="NotFound__link" >Return to home</Link>
            </section>
        </Layout>
    )
}
export default NotFound