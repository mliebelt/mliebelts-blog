import React from 'react'
import { Link } from 'gatsby'
import { withPrefix } from 'gatsby'

import { rhythm } from '../utils/typography'
import Author from '../components/author'


class Book extends React.Component {
  render() {
    const { link, date, tags, publicURL, excerpt, author, title } = this.props
    const realURL = publicURL.startsWith('/mliebelts-blog') ? publicURL : withPrefix(publicURL)
    return (
      <div key={link}>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Author>{author}</Author>:
          <Link style={{ boxShadow: '2px 2px 3px #118888', padding: '2px', lineHeight: '1.4' }} to={link}>
            {title}
          </Link>
        </h3>
        <small>{date}
          {tags.map(tag => {
            const link = '/tags/' + tag
            return (
              <span style={{ margin: '4px' }} key={tag}>
                <Link to={link}>{tag}</Link>
                </span>
            )
          })
          }</small>
        <Link to={link}>
          <img style={{ float: 'left', marginRight: rhythm(1) }} src={realURL} width="80px"></img>
        </Link>
        <p dangerouslySetInnerHTML={{ __html: excerpt }}/>
        <div style={{ clear: 'both' }}></div>
      </div>
    )
  }
}

export default Book