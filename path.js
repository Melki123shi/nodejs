// used to interact with our file
const path = require('path')

// platform specific separator
console.log(path.sep)
// joins a sequence of path segments using that paltform separator and returns the normalized form
const tezt = path.join("/comment'","context","text.txt")

// path.resolve returns the absolute path
const base  = path.basename(tezt)
console.log(base)
const absolute = path.resolve(__dirname, "comment", "context","text.txt")
console.log(absolute)