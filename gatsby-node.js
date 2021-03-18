const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type == "Mdx"){
        const slug = createFilePath({ node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: "slug",
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                slug: node.slug,
                owner: 'Gilles Trenson',
            }
        })
    })
}