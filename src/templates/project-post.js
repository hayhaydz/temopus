import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'

const ProjectPost = ({ data }) => {
    return (
        <Layout customTitle={data.markdownRemark.frontmatter.title} customDescription={data.markdownRemark.frontmatter.description} customImgSrc={data.markdownRemark.frontmatter.featured_image.childImageSharp.fluid.src}>
            <section className="ProjectPost">
                <span className="ProjectPost__smalltitle">Title</span>
                <h1 className="ProjectPost__title heading">{data.markdownRemark.frontmatter.title}</h1>
                <span className="ProjectPost__smalltitle">Completion Date</span>
                <h2 className="ProjectPost__date">{data.markdownRemark.frontmatter.date}</h2>
                <span className="ProjectPost__smalltitle">Description</span>
                <p className="ProjectPost__desc">{data.markdownRemark.frontmatter.description}</p>
                <div className="ProjectPost__content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
            </section>
        </Layout>
    )
}
export default ProjectPost

export const pageQuery = graphql`
    query ProjectPostBySlug($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                description
                date(formatString: "DD/MM/YYYY")
                featured_image {
                    childImageSharp {
                        fluid(maxWidth: 1200, quality: 100) {
                            src
                        }
                    }
                }
            }
            html
        }
    }
`