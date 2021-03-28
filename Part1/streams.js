const fs = require('fs');
// const { writeFile } = require('node:fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//   console.log('--------NEW CHUNK---------')
//   console.log(chunk);
//   writeStream.write('\nNEWCHUNK\n');
//   writeStream.write(chunk)
// })

//PIPING

readStream.pipe(writeStream)