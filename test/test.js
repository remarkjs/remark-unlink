'use strict';

var mdastUnlink = require('..');

var mdast = require('mdast'),
    test = require('tape');

var fs = require('fs'),
    path = require('path');


test(function (t) {
  t.equal(mdast.use(mdastUnlink).process(read('input1')),
          mdast.process(read('output1')));
  t.equal(mdast.use(mdastUnlink).process(read('input2')),
          mdast.process(read('output2')));
  t.end();
});


function read (name) {
  return fs.readFileSync(path.join(__dirname, name) + '.md', 'utf8');
}
