const express = require('express');

//EXPRESS APP
const app = express();

//LISTEN FOR REQUESTS
app.listen(3000);

app.get('/', (req, res) => {
  // res.send('THIS IS COMING FROM EXPRESS YOU TRICK!!!')
  res.sendFile('./views/inde.html', {root:__dirname })
})

app.get('/about', (req, res) => {
  // res.send('THIS IS MY ABOUT PAGE TRICK!!!') 
  res.sendFile('./views/about.html', {root: __dirname})
})