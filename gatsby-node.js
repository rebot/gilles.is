const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
    console.log(`Node created of type "${node.internal.type}"`)
    if (node.internal.type == "Mdx"){
        const fileNode = getNode(node.parent)
        console.log(fileNode.relativePath)
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
        query {
            allMdx {
            edges {
                node {
                    id
                    slug
                    timeToRead
                    wordCount {
                        paragraphs
                    }
                }
            }
            }
        }
    `)
    console.log(JSON.stringify(result, null, 4))
}