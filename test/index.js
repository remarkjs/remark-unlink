import fs from 'fs'
import path from 'path'
import test from 'tape'
import {remark} from 'remark'
import remarkUnlink from '../index.js'

test('remark-unlink', (t) => {
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

/**
 * @param {string} name
 * @returns {string}
 */
function read(name) {
  return fs.readFileSync(path.join('test', name) + '.md', 'utf8')
}
