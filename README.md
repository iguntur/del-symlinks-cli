# del-symlinks-cli [![Build Status](https://travis-ci.org/iguntur/del-symlinks-cli.svg?branch=master)](https://travis-ci.org/iguntur/del-symlinks-cli)

> Delete symlinks


## Install

``` bash
$ npm install --global del-symlinks-cli
```


## Usage

```
$ del-symlinks --help

  Usage
    $ del-symlinks <path|glob> [options]

  Options
    -d, --dry-run  List what would be deleted instead of deleting [Default: false]

  Examples
    $ del-symlinks foo.js bar.js,
    $ del-symlinks '*.js' '!app.js'
```


## Related

- [del-symlinks](https://github.com/iguntur/del-symlinks) - API for this module
- [del-cli](https://github.com/sindresorhus/del-cli) - Delete files and folders


## License

MIT © [Guntur Poetra](http://guntur.starmediateknik.com)
