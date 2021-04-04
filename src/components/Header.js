/** @jsx jsx */

import React from "react"
import {Helmet} from "react-helmet"
import { useStaticQuery, graphql, Link } from "gatsby"
import { jsx, useColorMode, Themed, Grid, Box, Divider } from "theme-ui"

export default ({ title }) => {
    const [colorMode, setColorMode] = useColorMode()
    const data = useStaticQuery(graphql`
        query HeadingQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
            </Helmet>
            <Grid pt={2} gap={0} width={[null, 64, 64]} as="header">
                <Box as={Themed.h3} sx={{textAlign: "left"}}>
                    <Link to="/" sx={{
                        variant: "text.hyperlink",
                        textDecoration: "none",
                    }}>{data.site.siteMetadata.title}</Link>
                </Box>
                <Box as={Themed.h3} sx={{textAlign: "center"}}>{title}</Box>
                <Box as={Themed.h3} sx={{textAlign: "right"}} variant="text.hyperlink"
                    onClick={(e) => {
                        setColorMode(colorMode === 'default' ? 'dark' : 'default')
                    }}>
                    Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
                </Box>
            </Grid>
            <Divider sx={{borderBottom: "2px solid"}} />
        </>
    )
}

