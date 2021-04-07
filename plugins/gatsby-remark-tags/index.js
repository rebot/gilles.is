const visit = require("unist-util-visit")
const { paragraph, text, link } = require("mdast-builder")
const toString = require("mdast-util-to-string")

module.exports = async ({ markdownAST }, pluginOptions) => {
    const regex = /#\w*/g
    visit(markdownAST, 'text', node => {
        const body = toString(node)
        console.log(regex.test(body))
        if (regex.test(body)){
            const tags = body.match(regex)
            console.log(tags)
            const ast = paragraph(tags.map(tag => link(tag, null, text(tag))))
            node.type = ast.type
            node.children = ast.children
            delete node.value
        }
    })
    return markdownAST
}