/** @jsx jsx */

import React from "react"
import { graphql, Link } from "gatsby"
import { jsx, Themed, Label, Input, Button, Flex, Box } from "theme-ui"

import Header from "components/Header"

export default ({ data }) => {
  return (
    <>
      <Header title="sharing/his/garden" />
      <Themed.h1>Welcome! 🌳</Themed.h1>
      <Themed.p>Welcome to my <b>Digital Garden</b>. It's a collection of project descriptions, ideas, write-ups of hackathons,... The current archive covers <Themed.code>{data.allSitePage.pageInfo.itemCount}</Themed.code> interesting articles</Themed.p>
      {data.allSitePage.edges.map(({ node: { path } }) => (
        <Themed.p><Themed.a as={Link} to={path}>{path}</Themed.a></Themed.p>
      ))}
      <form name="contact" netlify>
        <Flex sx={{ flex: '1 1 auto' }}>
          <Box p={2}>
            <Label htmlFor="comment">Leave a suggestion...</Label> 
            <Input type="text" id="comment" name="suggestion" />
          </Box>
          <Box p={2}>
            <Label htmlFor="submit">&nbsp;</Label> 
            <Button type="submit" id="sumbit">Send</Button>
          </Box>
        </Flex>
      </form>
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

