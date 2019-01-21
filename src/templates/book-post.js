import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Author from '../components/author'
import Isbn from '../components/isbn'
import { rhythm, scale } from '../utils/typography'

class BookPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Link to="/books">Alle Bücher</Link>
        <h1><Author>{post.frontmatter.author}</Author>: {post.frontmatter.title} </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(0),
          }}
        >
          {post.frontmatter.date}
          <Isbn>{post.frontmatter.isbn}</Isbn>
          <br/>
          Tags: 
          {post.frontmatter.tags.map(tag => {
            const link = "/tags/" + tag
            return (
              <span style={{margin: "4px"}} key={tag}>
                <Link to={link}>{tag}</Link>
              </span>
            )
          })
          }
          
        </p>
        <div>
          <img style={{float: "left", marginRight: rhythm(1)}} src={post.frontmatter.cover.publicURL} width="200px"></img>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {
              previous &&
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            }
          </li>
          <li>
            {
              next &&
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            }
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BookPostTemplate

export const pageQuery = graphql`
  query BookPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        date(formatString: "DD. MM. YYYY")
        tags
        isbn
        cover {
          publicURL
        }
      }
    }
  }
`
