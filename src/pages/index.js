/** @jsx jsx */

import React from "react"
import { graphql, Link } from "gatsby"
import { jsx, Themed, Badge } from "theme-ui"

import Header from "components/Header"

export default ({ data }) => {
  return (
    <>
      <Header title="greeting/you" />
      <Themed.h1>We got you covered..</Themed.h1>
      <Themed.p>The current archive covers <Themed.code>{data.allSitePage.pageInfo.itemCount}</Themed.code> interesting articles</Themed.p>
      {data.allSitePage.edges.map(({ node: { path } }) => (
        <Themed.p><Themed.a as={Link} to={path}>{path}</Themed.a></Themed.p>
      ))}

    </>
  )
}

export const query = graphql`
  query IndexPage{
    allSitePage(filter: {path: {regex: "/\/.*?\/.*[^\/]$/"}}, sort: {order: DESC, fields: path}) {
      edges {
        node {
          path
        }
      }
      pageInfo {
        itemCount
      }
    }
  }
`

