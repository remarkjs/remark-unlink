import fs from 'fs'
import path from 'path'
import remark from 'remark'
import test from 'tape'
import remarkUnlink from '../index.js'

test('remark-unlink', function (t) {
  t.equal(
    remark().use(remarkUnlink).processSync(read('input1')).toString(),
    remark().processSync(read('output1')).toString(),
    '#1'
  )

  t.equal(
    remark().use(remarkUnlink).processSync(read('input2')).toString(),
    remark().processSync(read('output2')).toString(),
    '#2'
  )

  t.end()
})

function read(name) {
  return fs.readFileSync(path.join('test', name) + '.md', 'utf8')
}
