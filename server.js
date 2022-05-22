const { webpage } = require('./Develop/public/assets/js/index');
const express = require('express');
const app = express();
app.get('./Develop/public/notes.html', (req, res) => {
    res.json(webpage);
  });
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });