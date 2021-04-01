const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Gilles.is",
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
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-katex",
            options: {
              strict: `ignore`,
            }
          },
        ],
        remarkPlugins: [
          require("remark-emoji"),
          require("remark-math"),
          require("remark-html-katex"),
        ], 
      }
    },
  ],
};
