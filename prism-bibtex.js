Prism.languages.bib = {
    'special': {
        pattern: /(^\s*)@(?:(?:preamble|string(?=\s*[({]))|comment(?=\s*[{]))/mi,
        lookbehind: true,
        alias: 'important'
    },
	'type': {
		pattern: /(^\s*)@(?:article|book|booklet|conference|inbook|incollection|inproceedings|manual|mastersthesis|misc|phdthesis|proceedings|techreport|unpublished)(?=\s*{)/mi,
        lookbehind: true,
        alias: 'function bold'
    },
    'unk-type': {
		pattern: /(^\s*)@[^,={}'"\s]+(?=\s*{)/mi,
        lookbehind: true,
        alias: 'function'
    },
    'name': {
        pattern: /([,{]\s*)[^,={}'"\s]+(?=\s*[,}])/mi,
        lookbehind: true,
        alias: 'regex'
    },
	'field': {
		pattern: /([,{(]\s*)(?:abstract|address|annote|author|booktitle|chapter|contents|copyright|crossref|doi|edition|editor|howpublished|institution|isbn|issn|journal|key|keywords|language|lccn|month|note|number|organization|pages|price|publisher|school|series|title|type|url|volume|year)(?=\s*=)/mi,
        lookbehind: true,
        alias: 'keyword italic'
	},
	'unk-field': {
		pattern: /([,{(]\s*)[^,={}'"\s]+(?=\s*=)/mi,
        lookbehind: true,
        alias: 'keyword'
	},
	'value': {
		pattern: /(=\s*){(?:[^{}]*|{(?:[^{}]*|{(?:[^{}]*|{[^}]*})*})*})*}/mi,
        lookbehind: true,
        alias: 'string',
        greedy: true,
        inside: {
            'tag': /\\(?:[$"!,;:~]|[a-z_]+(?=\s*{?))/mi,
        }
	},
	'number': {
		pattern: /(=\s*)[0-9]+(?=\s*[,}])/mi,
        lookbehind: true,
        alias: 'string'
	},
	'ref-string': {
		pattern: /([=#]\s*)[^,={}'"\s]+(?=\s*[#,}])/mi,
        lookbehind: true,
        alias: 'keyword'
	},
	'string': {
        pattern: /("|')(?:(?!\1)[^\\]|\\(?:\r\n|[\s\S]))*\1/mi,
        greedy: true,
        inside: {
            'tag': /\\(?:[$"!,;:~]|[a-z_]+(?=\s*{?))/mi,
        }
    },
    'symbol': /#/,
	'comment': /%.*/,
    'punctuation': /[=,{}]/
};
Prism.languages.bibtex = Prism.languages.bib;