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
                            <p className="About__details--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus malesuada dignissim convallis aliquam tellus convallis at. Fringilla suspendisse ipsum tristique pretium, non sit. Dui senectus interdum rhoncus non. Interdum aliquet erat habitant nunc, tellus, phasellus magna pellentesque praesent. Fringilla in egestas aliquet posuere etiam quis. Neque sed commodo commodo at. Vel vulputate eu in etiam tortor, elit ultrices. Porta est consectetur phasellus ipsum enim diam rutrum urna. Lacus, in tempor, egestas donec sed.</p>
                        </div>
                    </section>
                )
            }}
        />
    )
}
export default About