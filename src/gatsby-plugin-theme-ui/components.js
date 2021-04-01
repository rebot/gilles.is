/** @jsx jsx */

import React from "react"
import Prism from "@theme-ui/prism"
import { jsx, Themed } from "theme-ui"

import { Youtube } from "components/ui"

export default {
    pre: props => props.children,
    code: Prism,
}