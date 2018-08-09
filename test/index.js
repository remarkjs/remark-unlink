'use strict'

var fs = require('fs')
var path = require('path')
var remark = require('remark')
var test = require('tape')
var remarkUnlink = require('..')

test('remark-unlink', function(t) {
  t.equal(
    remark()
      .use(remarkUnlink)
      .processSync(read('input1'))
      .toString(),
    remark()
      .processSync(read('output1'))
      .toString(),
    '#1'
  )

  t.equal(
    remark()
      .use(remarkUnlink)
      .processSync(read('input2'))
      .toString(),
    remark()
      .processSync(read('output2'))
      .toString(),
    '#2'
  )

  t.end()
})

function read(name) {
  return fs.readFileSync(path.join(__dirname, name) + '.md', 'utf8')
}
