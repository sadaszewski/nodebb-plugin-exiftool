"use strict";

const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

const plugin = {};

plugin.stripEXIF = async function(data) {
	const { path } = data;
	await execFile('exiftool', [ '-all=', '-tagsfromfile', '@', '-Orientation', path ]);
};

module.exports = plugin;
