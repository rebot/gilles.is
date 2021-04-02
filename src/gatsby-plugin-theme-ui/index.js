import "@fontsource/roboto/300.css"
import "@fontsource/crimson-text"
import "@fontsource/fira-code"
import "@fontsource/material-icons"
import "@fontsource/share-tech"

import prism from "@theme-ui/prism/presets/theme-ui"

import "katex/dist/katex.min.css"

export default {
    breakpoints: ['40em', '52em', '64em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        body: 'Roboto,Verdana,Geneva,sans-serif',
        heading: 'Crimson Text,Georgia,Utopia,Charter,serif',
        pre: 'Fira Code, monospace',
        code: 'Share Tech, monospace',
        icon: 'Material Icons'
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
        body: 300,
        code: 400,
        heading: 400,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.06,
    },
    letterSpacings: {
        heading: -0.5
    },
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#0000CD',
        secondary: '#30c',
        highlight: '#ffff88',
        muted: '#f6f6f6',
        accent: '#d95d39',
        heading: '#001f42',
        comment: 'lightslategrey',
        modes: {
            dark: {
                text: '#fff',
                background: '#000',
                primary: '#1E90FF',
                heading: '#f6f6f6',
                comment: null
            },
            peach: {
                text: '#515151',
                background: '#fef7ea',
                primary: '#18457c',
                secondary: '#071527',
                muted: '#f4eee2'
            }
        }
    },
    text: {
        heading: {
            color: 'heading',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            letterSpacing: 'heading',
            code: {
                variant: 'text.code'
            }
        },
        code: {
            fontFamily: 'code',
            lineHeight: 'code',
            fontWeight: 'code'
        },
        hyperlink: {
            color: "primary",
            ":hover, :focus": {
                color: "secondary",
            }
        }
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
            maxWidth: ['100%', '800px', '800px'],
            px: 3,
            m: 'auto',
        },
        h1: {
            variant: 'text.heading',
            fontSize: 5,
        },
        h2: {
            variant: 'text.heading',
            fontSize: 4,
        },
        h3: {
            variant: 'text.heading',
            fontSize: 3,
        },
        h4: {
            variant: 'text.heading',
            fontSize: 2,
        },
        h5: {
            variant: 'text.heading',
            fontSize: 1,
        },
        h6: {
            variant: 'text.heading',
            fontSize: 0,
        },
        pre: {
            fontFamily: 'Fira Code, monospace',
            overflowX: 'auto',
            code: {
                fontFamily: 'pre',
            },
        },
        code: {
            ...prism,
            variant: 'text.code',
            fontSize: 'inherit',
            bg: 'muted',
            ".comment": {
                color: 'comment'
            }
        },
        p: {
            code: {
                variant: 'text.code'
            }
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        a: {
            variant: 'text.hyperlink'
        }
    },
}