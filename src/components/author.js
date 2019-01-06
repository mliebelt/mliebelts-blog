import React from 'react'
import { Link } from 'gatsby'
const _ = require("lodash")

function Author(props) {
    const name = props.children
    const url = `/authors/${_.kebabCase(name)}`

    return (
        <Link to={url}>{name}</Link>
    )  
}

export default Author