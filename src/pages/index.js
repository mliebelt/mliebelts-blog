import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class MainIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
        <Bio />
        <Link to="/books" style={{marginRight: "20px"}}>All Books</Link>
        <Link to="/blogs">All Blogs</Link>
        <h1>To blog or not to blog ...</h1>
        <div>Years ago, I tried to start blogging by using Jekyll and Github pages, and did that for some
          time. But it didn't feel right, and so I left it. Then I heard about Gatsby.js, and this
          sounded like an interesting solution. And it used React, and there was the pressure to learn
          some React for my work.
        </div>
        <div>So I moved my old blog to the new structure, and it was pretty easy to integrate tags,
          define different kind of blog posts, ... 
        </div>
        <div>The current categories are:
          <ul>
            <li><Link to="/books">Books</Link> Books that I read from time
            to time, mostly fantasy and some crime. And because most of the books I read are written in
            German, my pages are in German as well.
            </li>
            <li>
            <Link to="/blogs">Blogs</Link>  Mostly tech related, tags may help to find interesting topics in that. Not sure if if
              will continue doing that.
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default MainIndex

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
          }
        }
      }
    }
  }
`
