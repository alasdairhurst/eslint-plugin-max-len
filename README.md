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
        "max-len-3/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





