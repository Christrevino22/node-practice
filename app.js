const express = require('express');

//EXPRESS APP
const app = express();

//LISTEN FOR REQUESTS
app.listen(3000);
//BELOW IS TWO WAYS OF SENDING CODE TO THE BROWSER
//FIRST IS SENDING CODE DIRECTLY 
//SECOND IS SENDING A HTML FILE
app.get('/', (req, res) => {
  // res.send('THIS IS COMING FROM EXPRESS YOU TRICK!!!')
  res.sendFile('./views/inde.html', {root:__dirname })
})

app.get('/about', (req, res) => {
  // res.send('THIS IS MY ABOUT PAGE TRICK!!!') 
  res.sendFile('./views/about.html', {root: __dirname})
})

//REDIRECTS
app.get('/about-us', (req,res) => {
  res.redirect('/about');
})

//HADNLEING 404 PAGE
app.use((req,res) => {
  res.status(404).sendFile('./views/404.html', {root:__dirname});
})

//WE ARE BAsically doing the same thing is both files 
//BOTH APP / SERVER ARE THE SAME ONE IS WITH NODE THE OTHER IS WITH EXPRESS!!