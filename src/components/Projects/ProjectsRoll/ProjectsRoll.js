import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const ProjectsRoll = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
                        edges {
                            node {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                    date(formatString: "DD/MM/YYYY")
                                    description
                                    featured_image {
                                        childImageSharp {
                                            fluid(maxWidth: 1920, quality: 100) {
                                                ...GatsbyImageSharpFluid_withWebp
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const projects = data.allMarkdownRemark.edges
                return (
                    <div className="ProjectsRoll">
                        {projects.map((data, index) => 
                            <article className="ProjectsRoll__project" key={index} >
                                <p className="ProjectsRoll__project--date">{data.node.frontmatter.date}</p>
                                <Img fluid={data.node.frontmatter.featured_image.childImageSharp.fluid} className="ProjectsRoll__project--img"/>
                                <div className="ProjectsRoll__project--container">
                                    <h1 className="ProjectsRoll__project--container--title">{data.node.frontmatter.title}</h1>
                                    <p className="ProjectsRoll__project--container--desc">{data.node.frontmatter.description}</p>
                                    <Link to={data.node.fields.slug} className="ProjectsRoll__project--container--link">See More</Link>
                                </div>
                            </article>
                        )}
                    </div>
                )
            }}
        />
    )
}
export default ProjectsRoll