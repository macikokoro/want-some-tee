//From http://codewinds.com/blog/2013-08-19-nodejs-writable-streams.html
'use strict'

var fs = require('fs');

process.stdin.pipe(process.stdout);
process.stdin.pipe(fs.createWriteStream(process.argv[2]));

console.log("Your tee is brewing at: " + process.argv[2] + " please type what you want to save. When you are done ctrl + c to finish!");
