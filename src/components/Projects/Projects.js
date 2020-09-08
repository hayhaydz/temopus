import React from 'react'

import ProjectsRoll from './ProjectsRoll/ProjectsRoll'

const Projects = () => {
    return (
        <section className="Projects" id="projects">
            <h1 className="Projects__heading heading">Take a look at our previous work.</h1>
            <ProjectsRoll />
        </section>
    )
}
export default Projects