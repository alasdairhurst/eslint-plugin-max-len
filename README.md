# eslint-plugin-max-len-3

Alternative implementation of max-len allowing for more exceptions to the rule

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-max-len-3`:

```
$ npm install eslint-plugin-max-len-3 --save-dev
```


## Usage

Add `max-len-3` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "max-len-3"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "max-len-3/max-len-3": ["error", 80]
    }
}
```

```json
{
    "rules": {
        "max-len-3/max-len-3": ["error", {
            "ignoreLongLiteral": true
        }]
    }
}
```

```json
{
    "rules": {
        "max-len-3/max-len-3": ["error", {
            "ignoreLongLiteral": true,
            "longLiteralPrefixChars": 16
        }]
    }
}
```

## Supported Rules
max-len-3/max-len-3

### Options
This rule has a number or object option:

"code" (default 80) enforces a maximum line length
"tabWidth" (default 4) specifies the character width for tab characters
"comments" enforces a maximum line length for comments; defaults to value of code
"ignorePattern" ignores lines matching a regular expression; can only match a single line and need to be double escaped when written in YAML or JSON. Can also be an array of patterns.
"ignoreComments": true ignores all trailing comments and comments on their own line
"ignoreTrailingComments": true ignores only trailing comments
"ignoreUrls": true ignores lines that contain a URL
"ignoreStrings": true ignores lines that contain a double-quoted or single-quoted string
"ignoreTemplateLiterals": true ignores lines that contain a template literal
"ignoreRegExpLiterals": true ignores lines that contain a RegExp literal
"ignoreLongLiteral": true ignores lines that contain (mostly) a long literal. There are a few exceptions to the rule, lines ending in and brackets are allowed, as well as semicolons and commas. There are a number of characters allowed to prefix the literal. These characters can be part of one or more literals. Leading whitespace is ignored.
"longLiteralPrefixChars": (default 16) specifies the number of characters allowed to prefix long literals.
