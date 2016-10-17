#!/usr/bin/env node
'use strict';
var meow = require('meow');
var delSymlinks = require('del-symlinks');

var cli = meow([
	'Usage',
	'  $ del-symlinks <path|glob> [options]',
	'',
	'Options',
	'  -d, --dry-run  List what would be deleted instead of deleting [Default: false]',
	'',
	'Examples',
	'  $ del-symlinks foo.js bar.js',
	'  $ del-symlinks \'*.js\' \'!app.js\''
], {
	string: ['_'],
	boolean: [
		'dry-run'
	],
	alias: {
		d: 'dry-run'
	}
});

if (cli.input.length === 0) {
	console.error('Specify at least one path');
	process.exit(1);
}

delSymlinks(cli.input, cli.flags).then(function (files) {
	if (cli.flags.dryRun) {
		console.log(files.join('\n'));
	}
});
