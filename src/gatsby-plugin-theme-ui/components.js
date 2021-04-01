/** @jsx jsx */

import React from "react"
import Prism from "@theme-ui/prism"
import { jsx, Themed } from "theme-ui"

import { Youtube } from "components/ui"

export default {
    h1: (props) => (
        <Themed.h1 {...props}>
          <Themed.a href={`#${props.id}`}>{props.children}</Themed.a>
        </Themed.h1>
    ),
    pre: props => props.children,
    code: Prism,
}