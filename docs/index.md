[PrismJS] is great! The gziped+minified core is ~6&thinsp;KB, the API is gorgeous,
and although it uses simple regex matching, it is surprisingly accurate in most cases.
However, although it officially supports 175 languages currently, there is no support for [BibTeX] &#x1f612; ...

So, here is a BibTeX language extension for PrismJS!
<br>
Thanks to the fantastic extension support in PrismJS,
it took me less than an hour and only about 60 lines to write the initial version.
The gziped+minified JS file is ~400&thinsp;bytes and you simply need to load it after `prism.js`.



## Usage

Simply import the extension after the Prism scripts and stylesheets.
For example, in the `head` of you HTML document, you can add the following:

<pre class='language-html' data-line='10-14'><code>&lt;!-- Import the desired stylesheet for Prism: (`solarizedlight` theme shown below). --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-solarizedlight.min.css&quot; /&gt;

&lt;!-- Import the main Prism script. --&gt;
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js&quot;&gt;
&lt;/script&gt;

&lt;!-- Import other components and plugins as desired, e.g. autolinker. --&gt;

&lt;!-- Import the `prism-bibtex.js` extension. --&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/prismjs-bibtex@2.0.1/prism-bibtex.js&quot;
        integrity=&quot;sha256-+dK6uqUp/DnP6ef97s8XcoynBnGe5vM5gvBECH0EB3U=&quot; crossorigin=&quot;anonymous&quot;&gt;
&lt;/script&gt;
</code></pre>

## Small Examples

Below, I show the syntax-highlighting results for some tricky BibTeX files I found on the internet.

Please report bugs (or, open a PR) if you notice an incorrect highlighting.
You may find some examples of currently broken / unsupported features on [this page](broken.html).

### Snippets from [DBLP]

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

### Braces, Integers, No Quoted Strings

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

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-solarizedlight.min.css"
      integrity="sha512-fibfhB71IpdEKqLKXP/96WuX1cTMmvZioYp7T6I+lTbvJrrjEGeyYdAf09GHpFptF8toQ32woGZ8bw9+HjZc0A=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autolinker/prism-autolinker.min.css"
      integrity="sha512-4ZmAB2UXPu3Rgy5ZClpqnJ/zXXZBdulFXY1eWMLgIjp2HWgkHGIpr1b7kmCK+rdD5NYfivTp47UR+bQ4oTBllQ=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-highlight/prism-line-highlight.min.css"
      integrity="sha512-nXlJLUeqPMp1Q3+Bd8Qds8tXeRVQscMscwysJm821C++9w6WtsFbJjPenZ8cQVMXyqSAismveQJc0C1splFDCA=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"
        integrity="sha512-7Z9J3l1+EYfeaPKcGXu3MS/7T+w19WtKQY/n+xzmw4hZhJ9tyYmcUS+4QqAlzhicE5LAfMQSF3iFTK9bQdTxXg=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/keep-markup/prism-keep-markup.min.js"
        integrity="sha512-dM7y7FL7I43Zij3bPyIiAOl4ebzK01P8pcEUb7RvOKdXlxjSPebYBnkDB+S05PuNGlLFjvzVNRzuctj5A4P3Kg=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autolinker/prism-autolinker.min.js"
        integrity="sha512-h92O152CCXt3xEUWDYTGLz58u+IOpZU8Z2MEkkBsXsRlAhckPFeEolarVn7tOhTVbjsJPpyknL0CFUrc2rlgPQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-highlight/prism-line-highlight.min.js"
        integrity="sha512-255MpVHZHmxNdOj/PivQ+WSTYFjBxTMfmIszxwsJobUeaoDNUAnAQjYF5TznbiZXrXqpCy8q4QyvJzhykpof3Q=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
</script>

<script src="https://cdn.jsdelivr.net/npm/prismjs-bibtex@2.0.1/prism-bibtex.js"
        integrity="sha256-+dK6uqUp/DnP6ef97s8XcoynBnGe5vM5gvBECH0EB3U=" crossorigin="anonymous">
</script>

## Large Real-Life Bibliographies

- (~68&thinsp;KB) [Some BibTeX examples from CTAN](biblatex-examples.html)<br>
  Curated from [this StackExchange post](https://tex.stackexchange.com/questions/16490/the-gold-standard-in-bibtex-databases) to check for some edge cases.
- (~144&thinsp;KB) [Bibliography of ACM Turing Award lectures](acm-turing-awards.html) <br>
  includes notes for some entries (with LaTeX macros in some cases)
- (~534&thinsp;KB) [STOC 2010 -- 2019 bibliography](stoc_2010-2019.html)<br>
  includes abstracts for some entries (with `$...$` inline math in some cases)



[BibTeX]:   http://www.bibtex.org/
[DBLP]:     https://dblp.org/
[prismjs]:  https://prismjs.com/
