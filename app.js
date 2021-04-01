const express = require('express');

//EXPRESS APP
const app = express();

//LISTEN FOR REQUESTS
app.listen(3000);

app.get('/', (req, res) => {
  res.send('THIS IS COMING FROM EXPRESS YOU TRICK!!!')
})