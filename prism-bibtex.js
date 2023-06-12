(function (Prism) {
  var keyword = {
    pattern: /\\(?:\ |[^a-z@\s]|[a-z@]+\*?)/i
  }

  var latex = {
    'equation': {
      pattern: /(\$\$?)[^\$]+\1/m,
      alias: 'function',
      inside: keyword
    },
    'keyword': keyword
  };

  Prism.languages.bib = {
    'comment': /%.*/,
    'special': {
      pattern: /(^\s*)@(?:preamble|string|comment(?=\s*[({]))/mi,
      lookbehind: true,
      alias: 'important'
    },
    'class-name': {
      pattern: /(^\s*)@[a-z]+(?=\s*{)/mi,
      lookbehind: true
    },
    'key': {
      pattern: /([,{]\s*)[^,={}'"\s]+(?=\s*[,}])/mi,
      lookbehind: true,
      alias: 'regex'
    },
    'property': {
      pattern: /([,{(]\s*)[^,={}'"\s]+(?=\s*=)/mi,
      lookbehind: true
    },
    'string': {
      /* numbers | properly quoted strings | content with braces balanced up to depth 4 */
      pattern: /([=#{}]\s*)(?:\d+|("|')(?:(?!\2)[^\\]|\\.)*\2|{(?:(?:{(?:(?:{(?:(?:{(?:[^{}])*})|(?:[^{}]))*})|(?:[^{}]))*})|(?:[^{}]))*})/mi,
      lookbehind: true,
      greedy: true,
      inside: latex
    },
    'constant': {
      pattern: /([=#]\s*)[^,={}'"\s]+(?=\s*[#,}])/mi,
      lookbehind: true
    },
    'symbol': /#/,
    'punctuation': /[=,{}()]/
  };

  Prism.languages.bibtex = Prism.languages.bib;
}(Prism));
