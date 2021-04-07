"use strict"

const visit = require("unist-util-visit")
const { paragraph, text, link } = require("mdast-builder")
const toString = require("mdast-util-to-string")

module.exports = ({
    markdownAST 
}, pluginOptions = {}) => {
    const regex = /#\w*/g
    visit(markdownAST, "text", node => {
        
        if (!regex.test(node.value)) return

        const html = node.value.replace(/#\w+/g, (m) => 
            `<a target="${m} noreferer">${m}</a>`
        )
        
        node.type = "html"
        node.children = undefined
        node.value = html
    })
}