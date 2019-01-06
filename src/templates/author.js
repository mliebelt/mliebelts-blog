import React from "react"
import PropTypes from "prop-types"

import Layout from '../components/layout'

// Components
import { Link, graphql } from "gatsby"

const Authors = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark
  console.log(edges)
  return (
    <Layout location="/authors" title="mliebelt Starter Blog">
        <div>
        <h1>Author: {edges[0].node.frontmatter.author}</h1>
        <ul>
            {edges.map(({ node }) => {
            const { path, title } = node.frontmatter
            return (
                <li key={path}>
                <Link to={path}>{title}</Link>
                </li>
            )
            })}
        </ul>
        {/*
                This links to a page that does not yet exist.
                We'll come back to it!
                */}
        {/* <Link to="/authors">All authors</Link> */}
        </div>
    </Layout>
  )
}

Authors.propTypes = {
  pageContext: PropTypes.shape({
    author: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Authors

export const pageQuery = graphql`
  query($author: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
      frontmatter: { author: { eq: $author}}
    }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            author
          }
        }
      }
    }
  }
  `