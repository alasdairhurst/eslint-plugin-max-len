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
        "max-len-3/max-len-3": [80]
    }
}
```

## Supported Rules

* max-len-3

## Implementation plans

Extension of max-len

- allow lines which contain a very long literal ONLY
- allow lines with a long literal if preceeded by whitespace
- allow lines with a long literal if preceeded by any whitespace an optional prefix
  - allow closing bracket )/] and semicolon
  - literal can be any type (ignore types can be configurable?) i.e. variable name
  - prefix can be variable+function call, object key
  - prefix allowed if at least one of the following:
     - function call                  (i.e. longfn('long value')
     - object key + colon        (i.e. longKey: 'long value')
     - less than 15 characters (configurable)
  - e.g.
     - |        tap.test('long string'); (yes)
     - |        test('long string');       (yes)
     - |        test('long string');       (yes)
     - |        test(
                   'long string'
                 );                                 (yes, but not necesarry)
     - |        verylongfunctionnametest('long string'); (no)
     - |        something.something('long string');        (no)
     - |        something('long string')                           (yes)
     - |        a.b.c('long string')                                     (yes)





