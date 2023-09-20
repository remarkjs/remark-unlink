/**
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
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
        /** @type {Array<PhrasingContent>} */
        const replacement =
          'children' in node
            ? node.children
            : 'alt' in node && typeof node.alt === 'string'
            ? [{type: 'text', value: node.alt}]
            : []

        parent.children.splice(index, 1, ...replacement)
        return index
      }
    })

    squeezeParagraphs(tree)
  }
}
