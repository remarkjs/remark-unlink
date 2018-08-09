'use strict'

var visit = require('unist-util-visit')
var squeezeParagraphs = require('mdast-squeeze-paragraphs')

var types = ['link', 'linkReference', 'image', 'imageReference', 'definition']

var splice = [].splice

module.exports = unlink

function unlink() {
  return transformer
}

function transformer(tree) {
  visit(tree, types, visitor)
  squeezeParagraphs(tree)
}

function visitor(node, index, parent) {
  var siblings = parent.children

  splice.apply(siblings, [index, 1].concat(node.children || []))

  return index
}
