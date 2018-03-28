/* 
  Buffer数据块：
  JS语言自身只有字符串数据类型，没有二进制数据类型，因此NodeJS提供了一个与
  String对等的全局构造函数Buffer来提供对二进制数据的操作。
*/
var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);

console.log(bin[0]); // 104

var str = bin.toString('utf-8');
console.log(str); // hello

var bin2 = new Buffer('hello', 'utf-8');
console.log(bin2); // <Buffer 68 65 6c 6c 6f>

var sub = bin.slice(2);
sub[0] = 0x65;
console.log(bin); // <Buffer 68 65 65 6c 6f>

// Buffer的拷贝:先创建一个新的Buffer，并通过.copy方法把原Buffer中的数据复制过去
var dup = new Buffer(bin.length);
bin.copy(dup);
dup[0] = 0x48;
console.log(bin); // <Buffer 68 65 65 6c 6f>
console.log(dup); // <Buffer 48 65 65 6c 6f>
