import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

const shortcodes = { Link, Youtube }

const components = {
    ...shortcodes,
    pre: props => <div {...props} />,
    code: props => <pre style={{color: 'tomato'}} {...props} />
  }

export default ({ children }) => (
    <MDXProvider components={components}><p>Hallo!</p>{children}</MDXProvider>
)