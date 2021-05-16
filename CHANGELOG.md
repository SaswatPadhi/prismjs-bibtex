# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<hr>

## [Unreleased]

No changes

<hr>

## [2.0.1] - 2021-05-16

### Fixed
- Some lookbehind matches don't seem to work with PrismJS 1.15 - 1.17.1,
  so the minimum version is now raised to 1.19.
- Updated usage instructions.
  - Getting the versioned-JS files from jsDelivr is recommended now.
  - `prismjs-bibtex.min.js` is kept only for websites that already use it.

<hr>

## [2.0.0] - 2021-05-16

### Fixed
- Minor fixes to regex patterns for `macro` (previously `tag`) and `special` token types.
### Changed
- Updated the regex pattern for `string` (previously `value`) token type
  to subsume the regex patterns for `number` and `char` token types.
- Token types and aliases are more intuitive and meaningful now.
### Removed
- Removed `number` and `char` token types -- they are both part of the `string` token type now.
  Previously `string` was changed to `char` to prevent autolinking, but autolinking within strings
  appears to work correctly in majority of the cases.
  It only rarely fails when latex macros appear within strings.
### Added
- The extension now adheres to [IIFE style], which is now enforced in PrismJS (see PrismJS/prism#2867).

<hr>

## [1.1.0] - 2019-09-13

### Fixed
- Compatibility with `autolinker` plugin -- disabled autolinking except within comments.
### Removed
- Removed hardcoded list of "known" types and field names -- all field names are treated the same way now.

<hr>

## [1.0.0] - 2019-03-17

### Added
- Added initial regexes for parsing BibTeX files in PrismJS framework.
- Published package to npm.



[Unreleased]: https://github.com/SaswatPadhi/prismjs-bibtex/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/SaswatPadhi/prismjs-bibtex/releases/tag/v1.0.0
[1.1.0]: https://github.com/SaswatPadhi/prismjs-bibtex/releases/tag/v1.1.0
[2.0.0]: https://github.com/SaswatPadhi/prismjs-bibtex/releases/tag/v2.0.0
[2.0.1]: https://github.com/SaswatPadhi/prismjs-bibtex/releases/tag/v2.0.1

[IIFE style]: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
