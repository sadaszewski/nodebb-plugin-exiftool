"use strict";

const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

const plugin = {};

plugin.stripEXIF = async function(data) {
	const { path } = data;
	const ext = path.split('.').reverse()[0].toLowerCase();
	const supportedExtensions = [ 'jpg', 'jpeg' ];
	if (supportedExtensions.indexOf(ext) === -1)
		return;
	await execFile('exiftool', [ '-all=', '-tagsfromfile', '@', '-Orientation', path ]);
};

module.exports = plugin;
