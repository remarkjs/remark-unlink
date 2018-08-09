'use strict'

var select = require('unist-util-select')
var parents = require('unist-util-parents')
var squeezeParagraphs = require('mdast-squeeze-paragraphs')

var splice = [].splice

module.exports = unlink

function unlink() {
  return transformer
}

function transformer(tree) {
  var nodes = select(
    parents(tree),
    'link, linkReference, image, imageReference, definition'
  )

  nodes.forEach(each)

  squeezeParagraphs(tree)
}

function each(el) {
  var parent = el.parent
  var siblings = parent.node.children
  var index = siblings.indexOf(el.node)
  var children = el.children || []

  splice.apply(siblings, [index, 1].concat(children))

  children.forEach(patch)

  function patch(child) {
    child.parent = parent
  }
}
