[![npm](https://nodei.co/npm/mdast-unlink.png)](https://npmjs.com/package/mdast-unlink)

# mdast-unlink

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Remove all links, references and definitions. A plugin for [mdast].

Original motivation was to process Markdown documents in a way that would make it easier to read as a plain text.

[mdast]: https://github.com/wooorm/mdast

[travis]: https://travis-ci.org/eush77/mdast-unlink
[travis-badge]: https://travis-ci.org/eush77/mdast-unlink.svg?branch=master
[david]: https://david-dm.org/eush77/mdast-unlink
[david-badge]: https://david-dm.org/eush77/mdast-unlink.png

## Example

input:

```md
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

Imagine section titles and URLs being longer. On an ebook reader or a piece paper they are not only useless but looking ugly as well.

```
$ mdast -u unlink test/input.md
```

output:

```md
## TOC

-   section 1
-   section 2

## section 1

Section content may include some links.

## section 2

More content.
```

## API

```js
var mdastUnlink = require('mdast-unlink');

mdast.use(mdastUnlink)
```

Or from the command line:

```
$ mdast --use mdast-unlink
```


## Install

```
npm install mdast-unlink
```

## License

MIT
