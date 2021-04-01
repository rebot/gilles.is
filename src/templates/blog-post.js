/** @jsx jsx */

import React from "react"
import { graphql } from "gatsby"
import { jsx, useColorMode, Themed } from "theme-ui"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

/* 
 * `Styled` component worden hernoemd naar `Themed` in de laatste versie van theme-ui
 */

export default function BlogPost({ data }) {
    const [ colorMode, setColorMode ] = useColorMode()
    const post = data.mdx
    return (
        <>
            <Themed.h3>{post.slug}</Themed.h3>
            <button
                onClick={(e) => {
                    setColorMode(colorMode === 'default' ? 'dark' : 'default')
                }}>
                Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
            </button>
            <span sx={{fontFamily: 'icon'}} className="material-icons-outlined">open_in_new</span>
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