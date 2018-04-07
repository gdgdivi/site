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


## Contributing

This project is still under development, and it is open for contributions.
Feel free to send PR. If you have any questions, feel free to contact
[Vini Soares](https://github.com/viniciussoares).

### General workflow

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Make your changes
4. Run the tests, adding new ones for your code if necessary
5. Commit your changes (`git commit -am 'Added some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request


## License

Project is published under the [MIT license](https://github.com/gdgdivi/gdgdivi.github.io/blob/source/LICENSE).  
Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)
