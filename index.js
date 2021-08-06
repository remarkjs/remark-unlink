import visit from 'unist-util-visit'
import squeezeParagraphs from 'mdast-squeeze-paragraphs'

var types = ['link', 'linkReference', 'image', 'imageReference', 'definition']

var splice = [].splice

export default function remarkUnlink() {
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
