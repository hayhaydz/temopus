import React, { useState } from "react"
import Layout from '../components/Layout/Layout'

import Landing from '../components/Landing/Landing'
import Projects from "../components/Projects/Projects"
import Cost from '../components/Cost/Cost'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'

const Home = () => {
  const [budget, setBudget] = useState(0);

  return (
    <Layout>
      <Landing />
      <Projects />
      <Cost setBudget={setBudget} />
      <About />
      <Contact budget={budget} />
    </Layout>
  )
}
export default Home