[PrismJS] is great! The minified core is less than ~5&thinsp;KB, the API is gorgeous,
and although it uses simple regex matching, it is surprisingly accurate in most cases.
However, although it officially supports 175 languages currently, there is no support for [BibTeX] &#x1f612; ...

So here is a BibTeX language extension for PrismJS!
<br>
Thanks to the fantastic extension support in PrismJS,
it took me less than an hour and only about 60 lines to write the initial version.
The minified JS file is less than 1&thinsp;KB and all you need to do to highlight those BibTeX snippets, is just load it after `prism.js`.



## &raquo; Usage

Using this extension is super simple --- just import the JS file after all the regular Prism files.
In the `head` of you HTML document, you can add the following:

<pre class='language-html' data-line='13-16'><code>&lt;!-- Import the desired stylesheet for Prism: (`solarizedlight` theme shown below). --&gt;
&lt;link href=&quot;https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-solarizedlight.min.css&quot;
      integrity=&quot;sha256-3cT9py3J5XXzJkB9HvDuXrIgL+db6zf7BF2F+TBYdoo=&quot;
      rel=&quot;stylesheet&quot; crossorigin=&quot;anonymous&quot;/&gt;

&lt;!-- Import the main driver file for Prism. --&gt;
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/prism.min.js&quot;
        integrity=&quot;sha256-HWJnMZHGx7U1jmNfxe4yaQedmpo/mtxWSIXvcJkLIf4=&quot; crossorigin=&quot;anonymous&quot;&gt;
&lt;/script&gt;

&lt;!-- Import other components and plugins as desired. --&gt;

&lt;!-- Import the `prism-bibtex.js` extension. --&gt;
&lt;script src=&quot;https://saswatpadhi.github.io/prismjs-bibtex/prism-bibtex.min.js&quot;
        integrity=&quot;sha256-LdLe3QDoMjP5ed5hKliTe+/DmOChPYalAAjUNS+j2Lg=&quot; crossorigin=&quot;anonymous&quot;&gt;
&lt;/script&gt;
</code></pre>



## &raquo; Some Basic Examples

Below, I show the syntax-highlighting results for some tricky BibTeX files I found on the internet.
Please report bugs (or, open a PR) if you notice an incorrect highlighting.

### Some snippets from [DBLP]

```bib
{% raw %}@inproceedings{DBLP:conf/pldi/PadhiSM16,
  author    = {Saswat Padhi and
               Rahul Sharma and
               Todd D. Millstein},
  title     = {Data-driven precondition inference with learned features},
  booktitle = {Proceedings of the 37th {ACM} {SIGPLAN} Conference on Programming
               Language Design and Implementation, {PLDI} 2016, Santa Barbara, CA,
               USA, June 13-17, 2016},
  pages     = {42--56},
  year      = {2016},
  crossref  = {DBLP:conf/pldi/2016},
  url       = {https://doi.org/10.1145/2908080.2908099},
  doi       = {10.1145/2908080.2908099},
  timestamp = {Tue, 06 Nov 2018 16:59:30 +0100},
  biburl    = {https://dblp.org/rec/bib/conf/pldi/PadhiSM16},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}

@proceedings{DBLP:conf/pldi/2016,
  editor    = {Chandra Krintz and
               Emery Berger},
  title     = {Proceedings of the 37th {ACM} {SIGPLAN} Conference on Programming
               Language Design and Implementation, {PLDI} 2016, Santa Barbara, CA,
               USA, June 13-17, 2016},
  publisher = {{ACM}},
  year      = {2016},
  url       = {https://doi.org/10.1145/2908080},
  doi       = {10.1145/2908080},
  isbn      = {978-1-4503-4261-2},
  timestamp = {Tue, 06 Nov 2018 16:59:30 +0100},
  biburl    = {https://dblp.org/rec/bib/conf/pldi/2016},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}{% endraw %}
```

### Braces, Integers, No Double-Quoted Strings

Examples from <https://verbosus.com/bibtex-style-examples.html>:

```bibtex
@article{article,
  author  = {Peter Adams}, 
  title   = {The title of the work},
  journal = {The name of the journal},
  year    = 1993,
  number  = 2,
  pages   = {201-213},
  month   = 7,
  note    = {An optional note}, 
  volume  = 4
}
```

### Double-Quoted Strings

Examples from <https://www.latex-tutorial.com/tutorials/bibtex/>:

```bibtex
@BOOK{DUMMY:1,
AUTHOR="John Doe",
TITLE="The Book without Title",
PUBLISHER="Dummy Publisher",
YEAR="2100",
}

@INBOOK{BOOK:2,
    AUTHOR="John Doe",
    TITLE="The Book without Title",
    PUBLISHER="Dummy Publisher",
    YEAR="2100",
    PAGES="100-200",
}

@MISC{WEBSITE:1,
  HOWPUBLISHED = "\url{http://example.com}",
  AUTHOR = "Intel",
  TITLE = "Example Website",
  MONTH = "Dec",
  YEAR = "1988",
  NOTE = "Accessed on 2012-11-11"
}
```

### Multi-line Strings, Latex Commands

Examples from <https://www.overleaf.com/learn/latex/Bibliography_management_with_bibtex>:

```bib
@article{einstein,
    author =       "Albert Einstein",
    title =        "{Zur Elektrodynamik bewegter K{\"o}rper}. ({German})
        [{On} the electrodynamics of moving bodies]",
    journal =      "Annalen der Physik",
    volume =       "322",
    number =       "10",
    pages =        "891--921",
    year =         "1905",
    DOI =          "http://dx.doi.org/10.1002/andp.19053221004"
}
 
@book{latexcompanion,
    author    = "Michel Goossens and Frank Mittelbach and Alexander Samarin",
    title     = "The \LaTeX\ Companion",
    year      = "1993",
    publisher = "Addison-Wesley",
    address   = "Reading, Massachusetts"
}
```

### The `@String` and `@Preamble` Declarations

Example from <https://www.unf.edu/~wkloster/latex/bib.html>:

```bib
@STRING(PRL="Phys. Rev. Lett.")
@STRING(RMP="Rev. Mod. Phys.")
 
@ARTICLE{klitzing:qhe,
   AUTHOR="K. von Klitzing and G. Dorda and M. Pepper",
   TITLE="New method for high accuracy determination of fine structure
            constant based on quantised hall resistance",
   JOURNAL=PRL,
   VOLUME=45,
   PAGES=494,
   YEAR=1980
}
 
@ARTICLE{klitzing:nobel,
   AUTHOR="Klaus von Klitzing",
   TITLE="The Quantised Hall Effect",
   JOURNAL=RMP,
   VOLUME=58,
   PAGES=519,
   YEAR=1986
}
```

Example from <https://tex.stackexchange.com/questions/73293/how-to-use-string-variables-in-the-note-field-of-a-bib-file>:

```bib
{% raw %}@preamble{ "\newcommand{\mytext}{Last accessed:}" }

@ARTICLE{knuth:1974,
  author = {Knuth, Donald E.},
  title = {{C}omputer {P}rogramming as an {A}rt},
  journal = {Communications of the ACM},
  year = {1974},
  volume = {17},
  pages = {667--673},
  number = {12},
  month = {December },
  address = {New York, NY, USA},
  publisher = {ACM Press},
  note = {\mytext{} 09/20/12}
}{% endraw %}
```

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-solarizedlight.min.css"
      integrity="sha256-3cT9py3J5XXzJkB9HvDuXrIgL+db6zf7BF2F+TBYdoo=" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/plugins/line-highlight/prism-line-highlight.min.css"
      integrity="sha256-FFGTaA49ZxFi2oUiWjxtTBqoda+t1Uw8GffYkdt9aco=" crossorigin="anonymous" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/prism.min.js"
        integrity="sha256-HWJnMZHGx7U1jmNfxe4yaQedmpo/mtxWSIXvcJkLIf4=" crossorigin="anonymous">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-markup.min.js"
        integrity="sha256-8nT1E50WC5TDeb3+USsFEXN5ZGgLdmwZ6RS5KT71Wjs=" crossorigin="anonymous">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/plugins/autolinker/prism-autolinker.min.js"
        integrity="sha256-Qfxn8KLcPNmSqfiY/b9HKceQvP0g9EXwiDHDCcgfC2k=" crossorigin="anonymous">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/plugins/line-highlight/prism-line-highlight.min.js"
        integrity="sha256-i1I0MEGBEKKEtBLlagkEPdef5OGDQEUdcjCPYo47a3Y=" crossorigin="anonymous">
</script>
<script src="prism-bibtex.min.js" crossorigin="anonymous"
        integrity="sha256-LdLe3QDoMjP5ed5hKliTe+/DmOChPYalAAjUNS+j2Lg=">
</script>

## &raquo; Large Real-Life Bibliographies

I collected some bibliographies suggested on [this StackExchange post](https://tex.stackexchange.com/questions/16490/the-gold-standard-in-bibtex-databases)
to stress test my parser.

- The [ACM Turing Awards bibliography](https://saswatpadhi.github.io/prismjs-bibtex/acm-turing-awards.html) (144&thinsp;KB)
- The [STOC 2010 -- 2019 bibliography](https://saswatpadhi.github.io/prismjs-bibtex/stoc_2010-2019.html) (534&thinsp;KB) that contains abstracts of the papers (with `$...$` math)



[BibTeX]:   http://www.bibtex.org/
[DBLP]:     https://dblp.org/
[prismjs]:  https://prismjs.com/