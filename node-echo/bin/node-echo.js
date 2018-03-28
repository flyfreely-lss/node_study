var argv = require('argv');
var echo = require('../lib/echo');

console.log(echo(argv.run().targets.join(' ')));