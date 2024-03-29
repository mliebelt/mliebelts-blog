import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: 'flex',
              marginBottom: rhythm(1),
            }}
          >
            <GatsbyImage
              image={data.avatar.childImageSharp.gatsbyImageData}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: '100%'
              }} />
            <p>
              Written by <strong>{author}</strong> who lives and works near Stuttgart in Germany.{' '}
              <a href={`https://twitter.com/${social.twitter}`}>
                You should follow him on Twitter</a>, or see <a href="https://stackexchange.com/users/18210/mliebelt">
                his stats on Stackoverflow</a>.
              
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`query BioQuery {
  avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
    }
  }
  site {
    siteMetadata {
      author
      social {
        twitter
      }
    }
  }
}
`

export default Bio
