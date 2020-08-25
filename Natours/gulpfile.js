const { series } = require('gulp');

function hello(cb) {
	console.log('Hello Zell');
	cb();
}

exports.hello = hello;
exports.default = series(hello);