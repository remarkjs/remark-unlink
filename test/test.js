'use strict'

var remarkUnlink = require('..')

var remark = require('remark')

var test = require('tape')

var fs = require('fs')

var path = require('path')

test(function(t) {
  t.equal(
    remark()
      .use(remarkUnlink)
      .processSync(read('input1'))
      .toString(),
    remark()
      .processSync(read('output1'))
      .toString()
  )
  t.equal(
    remark()
      .use(remarkUnlink)
      .processSync(read('input2'))
      .toString(),
    remark()
      .processSync(read('output2'))
      .toString()
  )
  t.end()
})

function read(name) {
  return fs.readFileSync(path.join(__dirname, name) + '.md', 'utf8')
}
