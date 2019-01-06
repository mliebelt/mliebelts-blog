import React, { Children, Component } from 'react'
import { Link } from 'gatsby';

function Isbn(props) {
  const isbn = props.children
  const url = "https://www.amazon.de/s/ref=nb_sb_noss_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&field-keywords=" + isbn
  
  let ele
  //console.log("ISBN: " + isbn)
  if (isbn) {
      ele = <div style={{display: 'inline', margin: '4px'}}>ISBN: <a href={url} target="_blank">{isbn}</a></div>
  } else {
    ele = <span></span>
  }
  return (
    ele
  )
}

export default Isbn