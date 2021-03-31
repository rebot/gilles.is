import React from "react"
import { MDXProvider } from "@mdx-js/react"

const shortcodes = {}

const components = {
    ...shortcodes,
    a: props => <a {...props}><span sx={{fontFamily: 'icon'}} className="material-icons-outlined">open_in_new</span></a>
  }

export default ({ children }) => (
    <MDXProvider components={components}>{children}</MDXProvider>
)