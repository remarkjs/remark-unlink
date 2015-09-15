'use strict';

var select = require('unist-util-select'),
    parents = require('unist-util-parents'),
    squeezeParagraphs = require('mdast-squeeze-paragraphs')();


module.exports = function () {
  return function (ast) {
    select(parents(ast), 'link, linkReference, image, imageReference, definition')
      .forEach(function (el) {
        var siblings = el.parent.node.children;
        var index = siblings.indexOf(el.node);
        [].splice.apply(siblings, [index, 1].concat(el.node.children || []));
        (el.children || []).forEach(function (child) {
          child.parent = el.parent;
        });
      });
    squeezeParagraphs(ast);
  };
};
