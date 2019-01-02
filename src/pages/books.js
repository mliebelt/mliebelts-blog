import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BookIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const books = posts.filter(function(post) { return post.node.frontmatter.posttype === 'book'})

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
        <Bio />
        <Link to="/blogs">All Blogs</Link>
        {books.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}
              {node.frontmatter.tags.map(tag => {
                const link = "/tags/" + tag
                return (
                  <span style={{margin: "4px"}} key={tag}>
                    <Link to={link}>{tag}</Link>
                  </span>
                )
              })
              }</small>
              <img style={{float: "left", marginRight: rhythm(1)}} src={node.frontmatter.cover.publicURL} width="80px"></img>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <div style={{clear: "both"}}></div>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BookIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            posttype
            cover {
             publicURL
            }
          }
        }
      }
    }
  }
`
