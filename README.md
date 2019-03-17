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


## &raquo; Usage

Using this extension is super simple --- just import the JS file after all the regular Prism files.
In the `head` of you HTML document, you can add the following:

```html
<!-- Import the desired stylesheet for Prism: (`solarizedlight` theme shown below). -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-solarizedlight.min.css"
      integrity="sha256-uv4VzRy3z4cpObdkSN+OCocMJpELBaOtNcmCa6Wgyws="
      rel="stylesheet" crossorigin="anonymous"/>

<!-- Import the main driver file for Prism. -->
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.min.js"
        integrity="sha256-jc6y1s/Y+F+78EgCT/lI2lyU7ys+PFYrRSJ6q8/R8+o=" crossorigin="anonymous">
</script>

<!-- Import other components and plugins as desired. -->

<!-- Import the `prism-bibtex.js` extension. -->
<script defer src="https://saswatpadhi.github.io/prismjs-bibtex/prism-bibtex.min.js"
        integrity="sha256-2a1LJqD82CRe85ZL6FtoWnPe7+lSUcpnZpRmaYAeRrc=" crossorigin="anonymous">
</script>
```

The `defer` attribute delays the script execution (but not download) until the HTML page has been parsed completely.



[BibTeX]:   http://www.bibtex.org/
[prismjs]:  https://prismjs.com/