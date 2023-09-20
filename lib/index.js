/**
 * @typedef {import('mdast').Root} Root
 */

import {visit} from 'unist-util-visit'
import {squeezeParagraphs} from 'mdast-squeeze-paragraphs'

/**
 * Plugin to remove all links, images, references, and definitions.
 *
 * @type {import('unified').Plugin<void[], Root>}
 */
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
        parent.children.splice(
          index,
          1,
          ...('children' in node ? node.children : [])
        )
        return index
      }
    })

    squeezeParagraphs(tree)
  }
}
