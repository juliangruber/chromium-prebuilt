const fs = require('fs')

module.exports = fs.readFileSync(`${__dirname}/path.txt`, 'utf8').trim()
