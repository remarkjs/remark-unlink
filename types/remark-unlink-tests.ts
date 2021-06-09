import unified = require('unified')
import unlink = require('remark-unlink')

unified().use(unlink)
