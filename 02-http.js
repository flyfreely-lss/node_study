const http = require('http');

const server = http.createServer();

const handleRequest = (req, res) => {
	console.log('收到客户端请求...');
	console.log('请求路径：' + req.url);
	res.write('Hello World!');
	res.write('Hello World!');
	res.end();
}

server.on('request', handleRequest);

server.listen(8080, () => {
	console.log('开始监听8080...');
});