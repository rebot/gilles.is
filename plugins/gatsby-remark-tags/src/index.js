const visit = require("unist-util-visit")
const { paragraph, text, link } = require("mdast-builder")
const toString = require("mdast-util-to-string")

module.exports = ({
    markdownAST 
}, pluginOptions = {}) => {
    const regex = /#\w*/g
    visit(markdownAST, "text", (node, index, parent) => {
        
        const body = toString(node)

        // If this check is omitted, the tranformer will
        // start an infinite loop because a new text node 
        // is generated with the text equal to the tag
        if (parent.type == 'link') return

        if (!regex.test(body)) return

        const tags = body.match(regex)
        const ast = paragraph(tags.map(tag => link(tag, null, text(tag))))

        // Add class to tags to style them
        visit(ast, "link", node => {
            const data = node.data || (node.data = {})
            const props = data.hProperties || (data.hProperties = {})

            props.className = ["tag"]
        })
        
        node.type = ast.type.slice()
        node.children = [...ast.children]
        delete node.value
    })
}