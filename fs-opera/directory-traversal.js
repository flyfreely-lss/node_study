// 递归算法
function factorial(n) {
	if(n === 1) {
		return 1;
	}else {
		return n * factorial(n - 1);
	}
}

console.log(factorial(3));

// 遍历算法
// 目录是一个树状结构，在遍历时一般使用深度优先+先序遍历算法。深度优先，意味着到达一个节点后，首先接着遍历子节点而不是邻居节点。
// 先序遍历，意味着首次到达了某节点就算遍历完成，而不是最后一次返回某节点才算数。因此使用这种遍历方式时，下边这棵树的遍历顺序是
// A > B > D > E > C > F。

// 同步遍历
var fs = require('fs');
var path = require('path');
function travel(dir, callback) {
	fs.readdirSync(dir).forEach(function(file){
		var pathname = path.join(dir, file);
		
		if(fs.statSync(pathname).isDirectory()) {
			travel(pathname, callback)
		}else {
			callback(pathname)
		}
	});
}
travel('D:/workspace/lss', function(pathname) {
	console.log(pathname);
});
// 该函数以某个目录作为遍历的起点。遇到一个子目录时，就先接着遍历子目录。遇到一个文件时，就把文件的绝对路径传给回调函数。
// 回调函数拿到文件路径后，就可以做各种判断和处理。

// 异步遍历