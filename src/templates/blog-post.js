/** @jsx jsx */

import React from "react"
import { graphql, Link } from "gatsby"
import { jsx, useColorMode, Themed, Grid, Box, Button } from "theme-ui"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

export default function BlogPost({ data }) {
    const [ colorMode, setColorMode ] = useColorMode()
    const post = data.mdx || data
    return (
        <>
            <Grid pt={2} gap={0} width={[null, 64, 64]} as="header">
                <Box as={Themed.h3} sx={{textAlign: "left"}}>Gilles.is</Box>
                <Box as={Themed.h3} sx={{textAlign: "center"}}>{post.slug}</Box>
                <Box as={Themed.h3} sx={{textAlign: "right"}} variant="text.hyperlink"
                    onClick={(e) => {
                        setColorMode(colorMode === 'default' ? 'dark' : 'default')
                    }}>
                    Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
                </Box>
            </Grid>
            <hr/>
            <MDXRenderer>{post.body}</MDXRenderer>
        </>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(slug: {eq: $slug}) {
        id
        slug
        body
        timeToRead
        wordCount {
            paragraphs
        }
    }
  }
`