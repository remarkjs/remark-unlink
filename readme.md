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

## Note!

This plugin is ready for the new parser in remark
([`remarkjs/remark#536`](https://github.com/remarkjs/remark/pull/536)).
No change is needed: it works exactly the same now as it did before!

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

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

And our module, `example.js`, looks as follows:

```js
import {readSync} from 'to-vfile'
import {remark} from 'remark'
import remarkUnlink from 'remark-unlink'

const file = readSync('example.md')

remark()
  .use(remarkUnlink)
  .process(file)
  .then((file) => {
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

This package exports no identifiers.
The default export is `remarkUnlink`.

#### `unified().use(remarkUnlink)`

Plugin to remove all links, images, references, and definitions.

## Security

Use of `remark-unlink` does not involve [**rehype**][rehype] ([**hast**][hast])
or user content so there are no openings for [cross-site scripting (XSS)][xss]
attacks.

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

[build-badge]: https://github.com/remarkjs/remark-unlink/workflows/main/badge.svg

[build]: https://github.com/remarkjs/remark-unlink/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-unlink.svg

[coverage]: https://codecov.io/github/remarkjs/remark-unlink

[downloads-badge]: https://img.shields.io/npm/dm/remark-unlink.svg

[downloads]: https://www.npmjs.com/package/remark-unlink

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-unlink.svg

[size]: https://bundlephobia.com/result?p=remark-unlink

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md

[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md

[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[remark]: https://github.com/remarkjs/remark

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[rehype]: https://github.com/rehypejs/rehype

[hast]: https://github.com/syntax-tree/hast
