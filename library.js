"use strict";

const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

var plugin = {};

plugin.stripEXIF = async function(path) {
	await execFile('exiftool', ['-all=', '-tagsfromfile', '@', '-Orientation', path]);
};

module.exports = plugin;
