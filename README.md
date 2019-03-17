[PrismJS] is great! The minified core is less than 6&thinsp;KB, the API is gorgeous,
and although it uses simple regex matching, it is surprisingly accurate in most cases.
However, although it officially supports 175 languages currently, there is no support for [BibTeX] &#x1f612;

So here is a BibTeX language extension for PrismJS! &#x1f601;
It took me less than an hour to code it up, thanks to the fantastic extension support in PrismJS.
Our minified JS file is about 1.5&thinsp;KB and all you need to do to highlight those BibTeX snippets,
is just load our JS file after `prism.js`.

<p align="center">
  <img src="screenshot.png" width="531"/>
  <br>
  See <a href='https://saswatpadhi.github.io/prismjs-bibtex/'>this page</a> for many more live examples.
</p>



## &raquo; Basic Usage

Using this extension is super simple --- just import `prism-bibtex.min.js` in the `head` of your HTML page.
For example:

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-solarizedlight.min.css"/>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.min.js"></script>
<script defer src="https://saswatpadhi.github.io/prismjs-bibtex/prism-bibtex.min.js"></script>
```

The `defer` attribute delays the script execution (but not download) until the HTML page has been parsed completely.



[BibTeX]:   http://www.bibtex.org/
[prismjs]:  https://prismjs.com/