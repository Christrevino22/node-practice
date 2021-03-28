const fs = require('fs');

//READING FILES
//WHEN USING THIS FUNCTION EVERYTHING ELSE WILL STILL RUN NO MATTER IF THE FUNCTION HASN'T FULLY BEEN ACCOMPLISHED
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if(err) {
//     console.log(err)
//   }
//   console.log(data.toString());
// })

//THIS CONSOLE LOG BELOW WILL SHOW IN THE CONSOLE BEFORE THE FUNCTION IS FINISHED

// console.log('last line')


//WRITING FILES

// fs.writeFile('./docs/blog1.txt', 'HELLO, WOLRd', () => {
//   console.log('file was written!')
// });

// fs.writeFile('./docs/blog2.txt', 'Hello again', () => {
//   console.log('file was written')
// })

// fs.writeFile('./docs/deleteme.txt', 'hating ass punk', () => {
//   console.log('file was written!')
// })



//DIRECTORIES
if(!fs.existsSync('./views')) {

  fs.mkdir('./views', (err) => {
    if(err) {
      console.log(err)
    }
    console.log('folder was created')
  })
} else {
  fs.rmdir('./views', (err)=> {
    if(err) {
      console.log(err)
    }
    console.log('folder deleted!')
  })
}

//DELETING FILES

// if(fs.existsSync('./docs/deleteme.txt')) {
//   fs.unlink('./docs/deleteme.txt', (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log('file deleted')
//   })
// }