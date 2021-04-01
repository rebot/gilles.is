/** @jsx jsx */

import React from "react"
import Prism from "@theme-ui/prism"
import { Badge } from "theme-ui"

const shortcodes = {
  Badge
}

export default {
    ...shortcodes,
    pre: props => props.children,
    code: Prism,
}