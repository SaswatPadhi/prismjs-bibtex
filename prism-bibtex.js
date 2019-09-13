var latex_cmd = /\\(?:[`~@#$%^&()_=+{}\[\]\|\\:;"',\?\/]|[a-z]+\*?(?=\s*{?))/mi;
var internal_tags = {
  'equation': {
    pattern: /(\$\$?)[^\$]+\1/mi,
    alias: 'function italic',
    inside: {
      'tag': latex_cmd
    }
  },
  'tag': latex_cmd
};

Prism.languages.bib = {
  'comment': /%.*/,
  'special': {
    pattern: /(^\s*)@(?:(?:preamble|string(?=\s*[({]))|comment(?=\s*[{]))/mi,
    lookbehind: true,
    alias: 'important'
  },
  'type': {
    pattern: /(^\s*)@[^,={}'"\s]+(?=\s*{)/mi,
    lookbehind: true,
    alias: 'function bold'
  },
  'name': {
    pattern: /([,{]\s*)[^,={}'"\s]+(?=\s*[,}])/mi,
    lookbehind: true,
    alias: 'regex'
  },
  'field': {
    pattern: /([,{(]\s*)[^,={}'"\s]+(?=\s*=)/mi,
    lookbehind: true,
    alias: 'keyword'
  },
  'number': {
    pattern: /(=\s*)[0-9]+(?=\s*[,}])/mi,
    lookbehind: true,
    alias: 'char'
  },
  'value': {
    pattern: /([=#]\s*){(?:[^{}]*|{(?:[^{}]*|{(?:[^{}]*|{[^}]*})*})*})*}/mi,
    lookbehind: true,
    alias: 'char',
    greedy: true,
    inside: internal_tags
  },
  'ref-string': {
    pattern: /([=#]\s*)[^,={}'"\s]+(?=\s*[#,}])/mi,
    lookbehind: true,
    alias: 'keyword'
  },
  'char': {
    pattern: /("|')(?:(?!\1)[^\\]|\\(?:\r\n|[\s\S]))*\1/mi,
    greedy: true,
    inside: internal_tags
  },
  'symbol': /#/,
  'punctuation': /[=,{}]/
};
Prism.languages.bibtex = Prism.languages.bib;