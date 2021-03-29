import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

export default function BlogPost({ data }) {
    const post = data.mdx
    return (
        <>
            <h3>{post.slug}</h3>
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