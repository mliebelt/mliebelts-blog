import React from "react"
import PropTypes from "prop-types"

import Layout from '../components/layout'

// Components
import { Link, graphql } from "gatsby"
import Book from '../components/book'

const Authors = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges: books } = data.books
  let author = data.author
  let authorDesc
  if (author) {
    author = data.author.edges[0].node.frontmatter
    authorDesc = data.author.edges[0].node.html
  } 
  //console.log(books)
  console.log(author)
  return (
    <Layout location="/authors" title="mliebelt Starter Blog">
        <div>
        <h1>Author: {books[0].node.frontmatter.author}</h1>
        {author && (
          <div>
            { author.homepage &&
            <div><a href={author.homepage} target="_blank">Home Page</a></div>}
            { author.wiki &&
            <div><a href={author.wiki} target="_blank">Wikipedia</a></div>}
            <div dangerouslySetInnerHTML={{ __html: authorDesc }} />
          </div>
        )
        }
        <ul>
            {books.map(({ node }) => {
              // console.log("for author: " + node.frontmatter.author)
              console.log(node)
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
    books: PropTypes.shape({
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
    books: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
      frontmatter: { author: { eq: $author}, posttype: { eq: "book"}}
    }
    ) {
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
    author: allMarkdownRemark(
      limit: 1
      filter: {
        frontmatter: { 
          name: { eq: $author},
          posttype: { eq: "author"} }
      }) {
        edges {
          node {
            html
            frontmatter {
              name
              homepage
              wiki
              posttype
              birthday
            }
          }
        }
      }
  }
  `