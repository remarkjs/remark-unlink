import {visit} from 'unist-util-visit'
import {squeezeParagraphs} from 'mdast-squeeze-paragraphs'

export default function remarkUnlink() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (
        parent &&
        typeof index === 'number' &&
        (node.type === 'link' ||
          node.type === 'linkReference' ||
          node.type === 'image' ||
          node.type === 'imageReference' ||
          node.type === 'definition')
      ) {
        parent.children.splice(index, 1, ...(node.children || []))
        return index
      }
    })

    squeezeParagraphs(tree)
  }
}
