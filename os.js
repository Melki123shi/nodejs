const os = require('os')
const currentOs = {
    name: os.type(),
    release : os.release(),
    totalmem:os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOs)