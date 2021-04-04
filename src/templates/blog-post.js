/** @jsx jsx */

import React from "react"
import { graphql } from "gatsby"
import { jsx, Grid, Box } from "theme-ui"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Header from "components/Header"

export default function BlogPost({ path, children, data, pageContext }) {
    const post = data && data.mdx
    return (
        <>
            <Header title={path} />
            {post && 
                <Grid sx={{
                    fontStyle: "italic",
                    fontSize: 0
                }} gap={0} width={[null, 64, 64]} as="header">
                    <Box sx={{textAlign: "left"}}>By {pageContext.owner}</Box>
                    <Box sx={{textAlign: "center"}}>this is a {post.timeToRead} minutes read</Box>
                    <Box sx={{textAlign: "right"}}>{post.wordCount.paragraphs} paragraphs</Box>
                </Grid>
            }
            {post && <MDXRenderer>{post.body}</MDXRenderer>}
            {children}
        </>
    )
}

export const query = graphql`
  query MdxBlogPost($slug: String!) {
    mdx(slug: {eq: $slug}) {
        body
        timeToRead
        wordCount {
            paragraphs
        }
    }
  }
`