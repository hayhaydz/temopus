import React from "react"
import Layout from '../components/Layout/Layout'

import Landing from '../components/Landing/Landing'
import Projects from "../components/Projects/Projects"

const Home = () => {
  return (
    <Layout>
      <Landing />
      <Projects />
    </Layout>
  )
}
export default Home