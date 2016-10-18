import p from 'path';
import test from 'ava';
import fs from 'fs-extra';
import execa from 'execa';
import pathExists from 'path-exists';

global.Promise = Promise;

const fixtures = ['bar.txt', 'foo.txt', '.dot'];

test.beforeEach(t => {
	t.context.tmp = p.resolve('', p.join('.tmp', Math.random().toString().substring(2, 5)));
	t.context.files = p.join(t.context.tmp, 'files');
	t.context.symlinks = p.join(t.context.tmp, 'symlinks');

	fixtures.forEach(fileName => {
		fs.ensureFileSync(p.join(t.context.files, fileName));
		fs.ensureSymlinkSync(p.join(t.context.files, fileName), p.join(t.context.symlinks, fileName));
	});
});

test('remove', async t => {
	await execa('./cli.js', fixtures.map(fl => p.join(t.context.symlinks, fl)));

	fixtures.forEach(f => {
		t.true(pathExists.sync(p.join(t.context.files, f)));
		t.false(pathExists.sync(p.join(t.context.symlinks, f)));
	});
});

test('--dry-run', async t => {
	await execa('./cli.js', ['--dry-run'].concat(fixtures.map(fl => p.join(t.context.symlinks, fl))));

	fixtures.forEach(f => {
		t.true(pathExists.sync(p.join(t.context.files, f)));
		t.true(pathExists.sync(p.join(t.context.symlinks, f)));
	});
});
