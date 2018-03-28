var fs = require('fs');

fs.writeFile('./data/fs.txt', 'Hello World!', (err) => {
	if (err) throw err;
	console.log('The file has been saved!');
});

fs.readFile('./data/fs.txt', 'utf8', (err, data) => {
	if (err) throw err;
	console.log(data);
});