# Cargobay _v1.0.0_

[![Build Status](https://travis-ci.org/Kunstmaan/cargobay.svg)](https://travis-ci.org/Kunstmaan/cargobay)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.txt)

Cargobay is a utility library with some useful and commonly used components and snippets.


## Includes
- [Cookie-consent bar](cbCookieConsent/)
- [General](cbGeneral/)
- [Has space](cbHasSpace/)
- [Scroll-to](cbScrollTo/)
- [Toggle](cbToggle/)
- [Videolink](cbVideolink/)


## Installing using Bower
```
bower install cargobay
```


## Contribution

#### Git Flow
Cargo Bay works with [git-flow](https://github.com/nvie/gitflow).

For a contribution to Cargobay, you need to follow the [following workflow](https://github.com/nvie/gitflow#initialization) with the addition of a pull-request.

Example for adding a feature:
- Start from develop (make sure to pull first)
- `git flow feature start -your feature name-`
- `git flow feature publish -your feature name-`
- start making your changes (commit and push regularly)
- when done, make a pull-request from your feature branch to develop
- after the pull-request is accepted, do `git flow feature finish -your feature name-`

## Demo
Examples of this components can be found on [gh-pages](http://kunstmaan.github.com/cargobay)

## License
Cargobay is licensed under the [MIT license](http://opensource.org/licenses/MIT).
