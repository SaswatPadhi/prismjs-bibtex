PrismJS-BibTeX
<a href="https://www.npmjs.com/package/prismjs-bibtex"><img align="right" alt="npm" src="https://img.shields.io/npm/v/prismjs-bibtex?logo=npm&style=for-the-badge"></a><img align="right" alt="npm bundle minified size" src="https://img.shields.io/bundlephobia/min/prismjs-bibtex?label=minified&logo=javascript&style=for-the-badge">
========

A [BibTeX] language extension for [PrismJS].

<p align="center">
  <img src="docs/screenshot.png" width="720"/>  
</p>

## Usage

### In HTML

Simply import the `prism-bibtex.min.js` (recommended at the end of `body`):

```html
<script src="https://saswatpadhi.github.io/prismjs-bibtex/docs/prism-bibtex.min.js"></script>
```

Remember to import the PrismJS stylesheets and scripts _before_ importing this extension. For example:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-solarizedlight.min.css"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"></script>
<script src="https://saswatpadhi.github.io/prismjs-bibtex/docs/prism-bibtex.min.js"></script>
```

### In NodeJS

1. Add the package to your project:

    ```console
    $ npm install prismjs-bibtex
    ```

2. Import `prismjs-bibtex` your .js file, after Prism:

    ```js
    import Prism from 'prismjs';
    import 'prismjs-bibtex';
    ```



## Examples

- Check out some small BibTeX examples [on the project webpage](https://saswatpadhi.github.io/prismjs-bibtex/)
- Or, the significantly larger (144&thinsp;KB) [ACM Turing Awards bibliography](https://saswatpadhi.github.io/prismjs-bibtex/acm-turing-awards.html)
- Or, the even bigger (534&thinsp;KB) [STOC 2010 -- 2019 bibliography](https://saswatpadhi.github.io/prismjs-bibtex/stoc_2010-2019.html) that includes abstracts for the papers (with `$...$` inline math in some cases)





[BibTeX]:   http://www.bibtex.org/
[prismjs]:  https://prismjs.com/