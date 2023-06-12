### Partial / Invalid BibLaTeX Examples

- PrismJS version: 1.19.0
- PrismJS theme: okaidia


#### Example from [Issue #3]

```bib
@article{newpaper,
  title={

@article{existing,
  title={my old title}
}
```

Previously led to browser being stuck on an infinite loop.

#### Unsupported Nesting Depth

```bib
@article{nestingbelowlevel4,
  title={ l1 { l2 } l1 }
}

@article{nestingatlevel4,
  title={
    l1 { 
      l2 {
        l3 { l4 } l3
      } l2
    } l1
  }
}

@article{nestingabovelevel4,
  title={
    l1 { l2 { l3 { l4 {
      l5
    } l4 } l3 } l2 } l1
  }
}
```

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/themes/prism-okaidia.min.css"
      integrity="sha512-pGi87NmT0VeSbmZBK40y3wF4H2DlpCYc5lrO/3F/RPhnwn262NReW3jFtG2iZWhbpoWT5MDzBzawpOri+jcUTw==" crossorigin="anonymous" />


<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/prism.min.js"
        integrity="sha512-9ndS8HgVHWQq2A/kpIxygbIZQ7oljc9/AvoEv8SQDy192nAuCGSdk7OdAfCZLDkbRJLZMsrV0NXycMSLLNTWCw==" crossorigin="anonymous">
</script>

<script src="https://cdn.jsdelivr.net/npm/prismjs-bibtex@2.0.1/prism-bibtex.js"
        integrity="sha256-+dK6uqUp/DnP6ef97s8XcoynBnGe5vM5gvBECH0EB3U=" crossorigin="anonymous">
</script>

[Issue #3]: https://github.com/SaswatPadhi/prismjs-bibtex/issues/3
