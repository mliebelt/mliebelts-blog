import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Book from '../components/book'
import { rhythm } from '../utils/typography'

class BookIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const books = posts.filter(function(post) { return post.node.frontmatter.posttype === 'book' && ! post.node.frontmatter.draft})

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All books" keywords={['book']} />
        <Bio />
        <Link to="/blogs">All Blogs</Link>
        <h1>All Books</h1>
        {
          books.map(({ node }) => {
          //console.log(node)
          const title = node.frontmatter.title || node.fields.slug
    
          return (
            <Book 
              title={title} 
              author={node.frontmatter.author}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
              publicURL={node.frontmatter.cover.publicURL}
              link={node.fields.slug}
              excerpt={node.excerpt}></Book>
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
            date(formatString: "DD. MM. YYYY")
            title
            path
            author
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
