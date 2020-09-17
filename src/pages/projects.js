import React from 'react'

import Layout from '../components/Layout/Layout'
import ProjectsFeed from '../components/ProjectsFeed/ProjectsFeed'

const ProjectsPage = () => {
    return (
        <Layout customTitle="Projects" >
            <section className="ProjectsPage">
                <h1 className="ProjectsPage__heading heading">Projects</h1>
                <ProjectsFeed />
            </section>
        </Layout>
    )
}
export default ProjectsPage