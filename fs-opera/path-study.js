var path = require('path');

var cache = {};

// path.normalize: 将传入的路径转为标准路径
function store(key, value) {
	cache[path.normalize(key)] = value;
}

store('foo/bar', 1);
store('foo//baz//../bar', 2);
console.log(cache); // { 'foo\bar': 2 }
//注意注意：标准化之后的路径里的斜杠在Windows系统下是\，而在Linux系统下是/。
//如果想保证任何系统下都使用/作为路径分隔符的话，需要用.replace(/\\/g, '/')再替换一下标准路径。

// path.join：将传入的多个路径拼接位标准路径
var completePath = path.join('foo/', 'baz/', '../bar');
console.log(path.join('a/', '../bar')); // bar
console.log(completePath); // foo\bar

// path.extname：获得文件的扩展名
console.log(path.extname('foo/baz.js')); // .js
