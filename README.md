[![CircleCI](https://circleci.com/gh/gdgdivi/gdgdivi.github.io/tree/source.svg?style=svg)](https://circleci.com/gh/gdgdivi/gdgdivi.github.io/tree/source)

# GDG Divinópolis website

## Setup

You need nodejs to run and yarn to install the dependencies. Refer to package.json's engines fields for the correct versions

```
$ yarn # install dependencies
$ yarn develop # run development server
```

## Deploy

```
$ yarn # install dependencies
$ yarn deploy # deploy to github
```

## Stack

* gatsby.js: static site generator
* styled-components: css-in-js library for react which encapsules stylesheets for components and leverages js for logics related to css
* jest: javascript test runner
* eslint: javascript linter
* stylelint: like eslint but for css styles
* prettier: javascript code formatter
* babeljs: code transpiler
