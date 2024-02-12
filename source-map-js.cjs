const { SourceMapConsumer, SourceMapGenerator } = require('source-map-js');
const assert = require('assert');
const fs = require('fs');

const map = SourceMapGenerator.fromSourceMap(
	new SourceMapConsumer(fs.readFileSync('dist/style.css.map', 'utf8'))
);

assert.ok(map);
