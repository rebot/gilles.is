const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
    console.log(`Node created of type "${node.internal.type}"`)
    if (node.internal.type == "Mdx"){
        const fileNode = getNode(node.parent)
        console.log(fileNode.relativePath)
    }
}