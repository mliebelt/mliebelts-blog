const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogTemplate = path.resolve('./src/templates/blog-post.js')
    const tagTemplate = path.resolve('./src/templates/tags.js')
    const bookTemplate = path.resolve('./src/templates/book-post.js')
    const authorTemplate = path.resolve('./src/templates/author.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { frontmatter: {date: DESC }}, limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    path
                    tags
                    posttype
                    author
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        const blogs = posts.filter(function(post) { return post.node.frontmatter.posttype === 'blog'})
        const books = posts.filter(function(post) { return post.node.frontmatter.posttype === 'book'})

        blogs.forEach((post, index) => {
          const previous = index === blogs.length - 1 ? null : blogs[index + 1].node;
          const next = index === 0 ? null : blogs[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogTemplate,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        books.forEach((book, index) => {
          const previous = index === books.length - 1 ? null : books[index + 1].node;
          const next = index === 0 ? null : books[index - 1].node;
          createPage({
            path: book.node.fields.slug,
            component: bookTemplate,
            context: {
              slug: book.node.fields.slug,
              previous,
              next,
            }
          })
        })

        // Tag pages:
        let tags = []
        // Iterate though each post, putting all found tags into 'tags'
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })
        // Elleminate duplicate tagsjava
        tags = _.uniq(tags)

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })

        // Authors
        let authors = []
        books.forEach( edge => { authors.push(edge.node.frontmatter.author) })
        authors.forEach(author => {
          createPage({
            path: `/authors/${_.kebabCase(author)}`,
            component: authorTemplate,
            context: {
              author,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
