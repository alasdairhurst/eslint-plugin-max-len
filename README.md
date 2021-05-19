# @alasdair/eslint-plugin-max-len

Alternative implementation of max-len allowing for more exceptions to the rule

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@alasdair/eslint-plugin-max-len`:

```
$ npm install @alasdair/eslint-plugin-max-len --save-dev
```


## Usage

Add `@alasdair/max-len` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@alasdair/max-len"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@alasdair/max-len/max-len": ["error", 80]
    }
}
```

```json
{
    "rules": {
        "@alasdair/max-len/max-len": ["error", {
            "ignoreLongLiteral": true
        }]
    }
}
```

```json
{
    "rules": {
        "@alasdair/max-len/max-len": ["error", {
            "ignoreLongLiteral": true,
            "longLiteralPrefixChars": 16,
            "treatTemplateAsOneLiteral": true,
            "templateExpressionChars": 20
        }]
    }
}
```

## Supported Rules
@alasdair/max-len/max-len

### Options
This rule has a number or object option:

**code:** (default 80) enforces a maximum line length

**tabWidth:** (default 4) specifies the character width for tab characters

**comments:** enforces a maximum line length for comments; defaults to value of code

**ignorePattern:** ignores lines matching a regular expression; can only match a single line and need to be double escaped when written in YAML or JSON. Can also be an array of patterns.

**ignoreComments:** true ignores all trailing comments and comments on their own line

**ignoreTrailingComments:** true ignores only trailing comments

**ignoreUrls:** true ignores lines that contain a URL

**ignoreStrings:** true ignores lines that contain a double-quoted or single-quoted string

**ignoreTemplateLiterals:** true ignores lines that contain a template literal

**ignoreRegExpLiterals:** true ignores lines that contain a RegExp literal

**ignoreLongLiteral:** true ignores lines that contain (mostly) a long literal. There are a few exceptions to the rule, lines ending in and brackets are allowed, as well as semicolons and commas. There are a number of characters allowed to prefix the literal. These characters can be part of one or more literals. Leading whitespace is ignored.

**longLiteralPrefixChars:** (default 16) specifies the number of characters allowed to prefix long literals.

**treatTemplateAsOneLiteral:** true allows template strings with expressions to be treated as single literal when _ignoreLongLiteral_ is enabled. Otherwise, code will have to be split on the expression.

```code
`template string ${this.is + an.expression}`;
```

**templateExpressionChars:** (default 20) specifies the number of characters allowed within template expressions if _treatTemplateAsOneLiteral_ is enabled.

