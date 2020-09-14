import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const ProjectsFeed = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
                        edges {
                            node {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
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
                    <div className="ProjectsFeed">
                        {projects.map((data, index) => 
                            <Link to={data.node.fields.slug} className="ProjectsFeed__link" key={index}>
                                <article  className="ProjectsFeed__link--project">
                                    <h1 className="ProjectsFeed__link--project--title">{data.node.frontmatter.title}</h1>
                                    <Img fluid={data.node.frontmatter.featured_image.childImageSharp.fluid} className="ProjectsFeed__link--project--img" />
                                </article>
                            </Link>
                        )}
                    </div>
                )
            }}
        />
    )
}
export default ProjectsFeed