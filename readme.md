# remark-unlink

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Chat][chat-badge]][chat]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]

Remove all links, references, and definitions with [**remark**][remark].

Original motivation was to process Markdown documents in a way that would make
it easier to read as a plain text.
On an ebook reader or a piece of paper the links are useless and look ugly.

## Installation

[npm][]:

```sh
npm install remark-unlink
```

## Usage

Say we have the following file, `example.md`.
Imagine section titles and URLs a bit longer though.

```markdown
## TOC

- [section 1](#section-1)
- [section 2](#section-2)

## section 1

Section [content][1] may include some [links](https://domain.name/path).

[1]: https://domain.name/path

## section 2

![some images are here also](https://gif.com/1.gif)

More content.
```

And our script, `example.js`, looks as follows:

```js
var vfile = require('to-vfile')
var remark = require('remark')
var unlink = require('remark-unlink')

remark()
  .use(unlink)
  .process(vfile.readSync('example.md'), function(err, file) {
    if (err) throw err
    console.log(String(file))
  })
```

Now, running `node example` yields:

```markdown
## TOC

-   section 1
-   section 2

## section 1

Section content may include some links.

## section 2

More content.
```

## API

#### `remark().use(unlink)`

Transform the tree to remove links, images, references, and definitions.

## Contribute

See [`contributing.md` in `remarkjs/remark`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © Eugene Sharygin

[build-badge]: https://img.shields.io/travis/remarkjs/remark-unlink.svg

[build]: https://travis-ci.org/remarkjs/remark-unlink

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-unlink.svg

[coverage]: https://codecov.io/github/remarkjs/remark-unlink

[downloads-badge]: https://img.shields.io/npm/dm/remark-unlink.svg

[downloads]: https://www.npmjs.com/package/remark-unlink

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[license]: license

[npm]: https://docs.npmjs.com/cli/install

[contributing]: https://github.com/remarkjs/remark/blob/master/contributing.md

[coc]: https://github.com/remarkjs/remark/blob/master/code-of-conduct.md

[remark]: https://github.com/remarkjs/remark
