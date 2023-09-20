# remark-unlink

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[remark][]** plugin to remove all links, images, references, and definitions.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [unified][] ([remark][]) plugin to remove all links and
images.

## When should I use this?

This project is useful if you display markdown documents somewhere where links
and images don’t work, such as man pages, on paper, or some ereaders.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install remark-unlink
```

In Deno with [`esm.sh`][esmsh]:

```js
import remarkUnlink from 'https://esm.sh/remark-unlink@4'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import remarkUnlink from 'https://esm.sh/remark-unlink@4?bundle'
</script>
```

## Use

Say we have the following file `example.md`.

```markdown
# Uranus

**Uranus** is the seventh [planet](/wiki/Planet "Planet") from the Sun and is a
gaseous cyan [ice giant](/wiki/Ice_giant "Ice giant").

Photograph of Uranus in true colour by Voyager 2 in 1986:

![This is an image of the planet Uranus taken by the spacecraft Voyager 2 in 1986.
The Voyager project is managed for NASA by the Jet Propulsion Laboratory.](https://en.wikipedia.org/wiki/Uranus#/media/File:Uranus_as_seen_by_NASA's_Voyager_2_(remastered)_-_JPEG_converted.jpg)
```

…and a module `example.js`:

```js
import {remark} from 'remark'
import remarkUnlink from 'remark-unlink'
import {read} from 'to-vfile'

const file = await remark()
  .use(remarkUnlink)
  .process(await read('example.md'))

console.log(String(file))
```

…then running `node example.js` yields:

```markdown
# Uranus

**Uranus** is the seventh planet from the Sun and is a
gaseous cyan ice giant.

Photograph of Uranus in true colour by Voyager 2 in 1986:

This is an image of the planet Uranus taken by the spacecraft Voyager 2 in
1986\.
The Voyager project is managed for NASA by the Jet Propulsion
Laboratory.
```

## API

This package exports no identifiers.
The default export is [`remarkUnlink`][api-remark-unlink].

#### `unified().use(remarkUnlink)`

Remove all links, images, references, and definitions.

###### Parameters

There are no parameters.

###### Returns

Transform ([`Transformer`][unified-transformer]).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `remark-unlink@^5`,
compatible with Node.js 16.

This plugin works with `unified` version 3+ and `remark` version 4+.

## Security

Use of `remark-unlink` does not involve **[rehype][]** (**[hast][]**) or user
content so there are no openings for [cross-site scripting (XSS)][wiki-xss]
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

[size-badge]: https://img.shields.io/bundlejs/size/remark-unlink

[size]: https://bundlejs.com/?q=remark-unlink

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/main/contributing.md

[support]: https://github.com/remarkjs/.github/blob/main/support.md

[coc]: https://github.com/remarkjs/.github/blob/main/code-of-conduct.md

[license]: license

[hast]: https://github.com/syntax-tree/hast

[rehype]: https://github.com/rehypejs/rehype

[remark]: https://github.com/remarkjs/remark

[typescript]: https://www.typescriptlang.org

[unified]: https://github.com/unifiedjs/unified

[unified-transformer]: https://github.com/unifiedjs/unified#transformer

[wiki-xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[api-remark-unlink]: #unifieduseremarkunlink
