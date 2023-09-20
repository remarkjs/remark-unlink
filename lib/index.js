/**
 * @typedef {import('mdast').Root} Root
 */

import {squeezeParagraphs} from 'mdast-squeeze-paragraphs'
import {visit} from 'unist-util-visit'

/**
 * Remove all links, images, references, and definitions.
 *
 * @returns
 *   Transform.
 */
export default function remarkUnlink() {
  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    visit(tree, function (node, index, parent) {
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
