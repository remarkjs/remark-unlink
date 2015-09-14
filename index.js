'use strict';

var select = require('unist-util-select'),
    parents = require('unist-util-parents');


module.exports = function () {
  return function (ast) {
    select(parents(ast), 'link, linkReference, image, imageReference, definition')
      .forEach(function (el) {
        var siblings = el.parent.node.children;
        var index = siblings.indexOf(el.node);
        [].splice.apply(siblings, [index, 1].concat(el.node.children || []));
      });
  };
};
