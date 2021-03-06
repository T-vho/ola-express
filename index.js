const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!, From Express!');
});

app.get('/about', (req, res) => {
  res.send('About page!, From Express!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});