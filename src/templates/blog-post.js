import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

export default function BlogPost({ data }) {
    const post = data.mdx
    return (
        <>
            <h3>{post.slug}</h3>
            <MDXRenderer>{post.body}</MDXRenderer>
        </>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(id: {eq: $slug}) {
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