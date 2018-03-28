var fs = require('fs');
/*Stream(数据流):
当内存中无法一次装下需要处理的数据时，或者一边读取一边处理更加高效时，
我们就需要用到数据流*/
var src = '../data/fs.txt';
var dst = '../data/3.txt';

var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

rs.on('data', function(chunk) {
	if(ws.write(chunk) === false) {
		rs.pause();
	}
});

rs.on('end', function() {
	ws.end();
});

ws.on('drain', function() {
	rs.resume();
});