'use strict';

var mdastUnlink = require('..');

var mdast = require('mdast'),
    test = require('tape');

var fs = require('fs');


test(function (t) {
  var input = fs.readFileSync(__dirname + '/input.md', 'utf8');
  var output = fs.readFileSync(__dirname + '/output.md', 'utf8');
  t.deepEqual(mdast.use(mdastUnlink).process(input), mdast.process(output));
  t.end();
});
