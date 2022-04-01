"use strict";

const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

const plugin = {};

plugin.stripEXIF = async function(data) {
	const { path } = data;
	let [ ext, ..._ ] = path.split('.').reverse();
	ext = ext.toLowerCase();
	const supportedExtensions = [ 'jpg', 'jpeg' ];
	if (supportedExtensions.indexOf(ext) === -1)
		return;
	await execFile('exiftool', [ '-all=', '-tagsfromfile', '@', '-Orientation', path ]);
};

module.exports = plugin;
