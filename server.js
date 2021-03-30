const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //WE WILL START USING LODASH
  //THIS IS ONLY AN EXAMPLE BUT LODASH LOOKS PRETTY DOPE!!!!
  const num = _.random(0, 20);
  console.log(num)

  const greet = _.once(() => {
    console.log('hello')
  })

  // greet()
  // greet()

  //set header content type
  res.setHeader('Content-Type', 'text/html');
  //CREATING A NEW PATH TO USE FOR OUR ROUTES!!!
  //BELOW IS A BASIC ROUTER SYSTEM
  let path = './views/';
  switch(req.url) {
    case '/':
        path+= 'inde.html'
        res.statusCode = 200;
        break;
      case '/about':
        path += 'about.html'
        res.statusCode = 200;
        break;
      case '/about-me':
        // path += 'about.html'
        //BELOW WE ADDED A REDIRECT FOR ROUTES
        //HOW TO PIN POINT OLD URLS AND SEND THEM TO DAT NEW NEW!!
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
      default:
        path += '404.html'
        res.statusCode = 404;

        break;
  }
  //SEND HTML FILE
  //ALSO PLUG YOUR PATH IN OR ROUTERS!!
    fs.readFile(path, (err,data) => {
      if (err) {
        console.log(err)
        res.end()
        } else {
          //INSTEAD OF .WRITE() WE CAN JUST INPUT DATA IN THE END TO MAKE IT SHORT AND SWEET
          // res.write(data);
           res.end(data)
      }
    })
    //THIS IS HOW YOU DIRECTLY ADD HTML TO BROWESER!!-
  // res.write('<head><link rel="stylesheet"href="#"></head>');
  // res.write('<p>Hello ninjas</p>');
  // res.write('<p>Hello a gain ninjas</p>');

  // res.end();
})

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
}) 