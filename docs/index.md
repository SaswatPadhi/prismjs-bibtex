[PrismJS] is great! The minified core is less than 6&thinsp;KB, the API is gorgeous,
and although it uses simple regex matching, it is surprisingly accurate in most cases.
However, although it officially supports 175 languages currently, there is no support for [BibTeX] &#x1f612;

So here is a BibTeX language extension for PrismJS! &#x1f601;
It took me less than an hour to code it up, thanks to the fantastic extension support in PrismJS.
Our minified JS file is about 1.5&thinsp;KB and all you need to do to highlight those BibTeX snippets,
is just load our JS file after `prism.js`.



## &raquo; Usage

Using this extension is super simple --- just import the JS file after all the regular Prism files.
In the `head` of you HTML document, you can add the following:

<pre class='language-html' data-line='13-16'><code>&lt;!-- Import the desired stylesheet for Prism: (`solarizedlight` theme shown below). --&gt;
&lt;link href=&quot;https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-solarizedlight.min.css&quot;
      integrity=&quot;sha256-uv4VzRy3z4cpObdkSN+OCocMJpELBaOtNcmCa6Wgyws=&quot;
      rel=&quot;stylesheet&quot; crossorigin=&quot;anonymous&quot;/&gt;

&lt;!-- Import the main driver file for Prism. --&gt;
&lt;script defer src=&quot;https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.min.js&quot;
        integrity=&quot;sha256-jc6y1s/Y+F+78EgCT/lI2lyU7ys+PFYrRSJ6q8/R8+o=&quot; crossorigin=&quot;anonymous&quot;&gt;
&lt;/script&gt;

&lt;!-- Import other components and plugins as desired. --&gt;

&lt;!-- Import the `prism-bibtex.js` extension. --&gt;
&lt;script defer src=&quot;https://saswatpadhi.github.io/prismjs-bibtex/prism-bibtex.min.js&quot;
        integrity=&quot;sha256-2a1LJqD82CRe85ZL6FtoWnPe7+lSUcpnZpRmaYAeRrc=&quot; crossorigin=&quot;anonymous&quot;&gt;
&lt;/script&gt;
</code></pre>

The `defer` attribute delays the script execution (but not download) until the HTML page has been parsed completely.



## &raquo; Highlighted Samples

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

@conference{conference,
  author       = {Peter Draper}, 
  title        = {The title of the work},
  booktitle    = {The title of the book},
  year         = 1993,
  editor       = {The editor},
  volume       = 4,
  series       = 5,
  pages        = 213,
  address      = {The address of the publisher},
  month        = 7,
  organization = {The organization},
  publisher    = {The publisher},
  note         = {An optional note}  
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
 
@misc{knuthwebsite,
    author    = "Donald Knuth",
    title     = "Knuth: Computers and Typesetting",
    url       = "http://www-cs-faculty.stanford.edu/\~{}uno/abcde.html"
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

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-solarizedlight.min.css"
      integrity="sha256-uv4VzRy3z4cpObdkSN+OCocMJpELBaOtNcmCa6Wgyws=" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/plugins/line-highlight/prism-line-highlight.min.css"
      integrity="sha256-FFGTaA49ZxFi2oUiWjxtTBqoda+t1Uw8GffYkdt9aco=" crossorigin="anonymous" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.min.js"
        integrity="sha256-jc6y1s/Y+F+78EgCT/lI2lyU7ys+PFYrRSJ6q8/R8+o=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/components/prism-markup.min.js"
        integrity="sha256-QciVGr0G0qBC7iVqTH0zo6B2h4sFTL5iyxA3vO0Mu2M=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/plugins/line-highlight/prism-line-highlight.min.js"
        integrity="sha256-DEl9ZQE+lseY13oqm2+mlUr+sVI18LG813P+kzzIm8o=" crossorigin="anonymous"></script>
<script src="prism-bibtex.min.js" integrity="sha256-2a1LJqD82CRe85ZL6FtoWnPe7+lSUcpnZpRmaYAeRrc=" crossorigin="anonymous">
</script>


[BibTeX]:   http://www.bibtex.org/
[DBLP]:     https://dblp.org/
[prismjs]:  https://prismjs.com/