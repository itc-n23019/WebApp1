const print = console.log
const stream = require('fs')
  .readFileSync('./data', 'utf-8')
  .trim()
const lines = stream.split('\n')
const [a, b] = lines
print(a, b)
