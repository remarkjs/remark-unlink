'use strict';

var remarkUnlink = require('..');

var remark = require('remark'),
    test = require('tape');

var fs = require('fs'),
    path = require('path');


test(function (t) {
  t.equal(remark.use(remarkUnlink).process(read('input1')),
          remark.process(read('output1')));
  t.equal(remark.use(remarkUnlink).process(read('input2')),
          remark.process(read('output2')));
  t.end();
});


function read (name) {
  return fs.readFileSync(path.join(__dirname, name) + '.md', 'utf8');
}
