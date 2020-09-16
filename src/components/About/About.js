import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const About = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
                        edges {
                            node {
                                frontmatter {
                                    title
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const projects = data.allMarkdownRemark.edges
                return (
                    <section className="About" id="about">
                        <h1 className="About__heading heading">Who are we?</h1>
                        <div className="About__details">
                            <h3 className="About__details--subtitle">Experience</h3>
                            <p className="About__details--detail">2+ years</p>
                            <h3 className="About__details--subtitle">Projects Developed</h3>
                            <p className="About__details--detail">{projects.length}</p>
                            <p className="About__details--desc">An independent design agency based out of Wells in the rural countryside of Somerset. Offering a new and afforable oppurtunity to businesses looking to reach new audiences. We take care with each and every project that we work on and ensure that each one is unique and bespoke to it’s services. We develop our projects with cutting edge web technologies to provide the most up-to-date experience for our clients customers. We strive to provide more for less, focusing on the most integral parts of your business and presenting that to the world.</p>
                        </div>
                    </section>
                )
            }}
        />
    )
}
export default About