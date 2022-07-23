import React, { Children, Component } from 'react'
import { Link } from 'gatsby';

function Isbn(props) {
  const isbn = props.children
  const url = "https://www.thalia.de/suche?filterPATHROOT=&sq=" + isbn
  
  let ele
  //console.log("ISBN: " + isbn)
  if (isbn) {
      ele = <span style={{display: 'inline', margin: '4px'}}>ISBN: <a href={url} target="_blank" rel="noopener noreferrer">{isbn}</a></span>
  } else {
    ele = <span></span>
  }
  return (
    ele
  )
}

export default Isbn