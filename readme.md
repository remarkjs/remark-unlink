# remark-unlink

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to remove all links, images, references, and
definitions.

Original motivation was to process Markdown documents in a way that would make
it easier to read as a plain text.
On an ebook reader or a piece of paper the links are useless and look ugly.

## Install

[npm][]:

```sh
npm install remark-unlink
```

## Use

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

Plugin to remove all links, images, references, and definitions.

## Security

Use of `remark-unlink` does not involve [**rehype**][rehype] ([**hast**][hast])
or user content so there are no openings for [cross-site scripting (XSS)][xss]
attacks.

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

[build-badge]: https://img.shields.io/travis/remarkjs/remark-unlink/master.svg

[build]: https://travis-ci.org/remarkjs/remark-unlink

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-unlink.svg

[coverage]: https://codecov.io/github/remarkjs/remark-unlink

[downloads-badge]: https://img.shields.io/npm/dm/remark-unlink.svg

[downloads]: https://www.npmjs.com/package/remark-unlink

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-unlink.svg

[size]: https://bundlephobia.com/result?p=remark-unlink

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/master/contributing.md

[support]: https://github.com/remarkjs/.github/blob/master/support.md

[coc]: https://github.com/remarkjs/.github/blob/master/code-of-conduct.md

[license]: license

[remark]: https://github.com/remarkjs/remark

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[rehype]: https://github.com/rehypejs/rehype

[hast]: https://github.com/syntax-tree/hast
