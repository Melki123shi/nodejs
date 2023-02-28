const {readFileSync, writeFileSync} = require('fs');

// path and encoding// node knows how to decode a file // specify the decoding as utf8 
const first = readFileSync("../comtent/first.txt", "utf8")
const second = readFileSync("../comtent/second.txt", "utf8")
// this on over writes the text
writeFileSync( "../comtent/result.txt",`this is`, 'utf8')
// to append
writeFileSync( "../comtent/result.txt",`this is`,{flag: 'a'})
writeFileSync( "../comtent/result.txt",`123`,{flag: 'a'})
const result = readFileSync( "../comtent/result.txt",'utf8')

console.log(result)