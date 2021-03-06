const path = require('path');

const jargon = require("./src/util/jargon.js")

module.exports = {
  siteMetadata: {
    title: "Gilles.is",
    description: "Gilles.is sharing/talking/cycling/writing/...",
    author: "Gilles Trenson",
    siteURL: "https://gilles.is"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components")
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-git",
      options: {
        name: "zettelkasten",
        remote: "https://github.com/rebot/Zettelkasten",
        patterns: ["!Templates", "**/*.{md,mdx}"]
      },
      __key: "zettelkasten"
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: "@theme-ui/preset-tosh",
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: path.resolve(`./src/templates/blog-post.js`)
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-katex",
            options: {
              strict: "ignore",
            }
          },
          {
            resolve: "gatsby-remark-tags",
            options: {
              strict: "ignore",
            }
          }
        ],
        remarkPlugins: [
          require("remark-emoji"),
          require("remark-math"),
          require("remark-html-katex"),
          [require("remark-jargon"), { jargon: jargon }]
        ], 
      }
    },
  ],
};
