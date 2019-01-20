import React from "react"
import PropTypes from "prop-types"

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

// Components
import { Link, graphql } from "gatsby"
import Book from '../components/book'


const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  let tags = data.tags
  let totalCount, path = null
  if (data.tags) {
    tags = data.tags.edges
    totalCount = data.tags.totalCount
  }
  let books = data.books
  if (books) {
    books = books.edges
    totalCount = data.books.totalCount
  }
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout location="/tags" title="mliebelt Starter Blog">
        <div>
        <h1>{tagHeader}</h1>
        <Link to="/tags">All tags</Link>
        {books && 
        books.map(({ node }) => {
            const { title } = node.frontmatter
            return (
              <Book key={title}
                title={title} 
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                tags={node.frontmatter.tags}
                publicURL={node.frontmatter.cover.publicURL}
                link={node.fields.slug}
                excerpt={node.excerpt}></Book>
            )
            })}
          {tags &&
          tags.map(({ node }) =>  {
            const { title } = node.frontmatter
            return (
                <div key={node.frontmatter.path}>
                <Link to={node.frontmatter.path}>{title}</Link>
                </div>
            )
          })}
        </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    books: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
      frontmatter: { tags: { in: [$tag] }, posttype: { eq: "book"} }
    }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD. MM. YYYY")
            title
            path
            author
            tags
            cover {
              publicURL
            }
          }
        }
      }
    }
    tags: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, posttype: { eq: "blog"} } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            posttype
            title
            path
          }
        }
      }
    }
  }
  `