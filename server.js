const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '.next/static/development/pages/_app.js')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname), '.next/static/development/pages/', '_app.js');
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('server running on port ', + port);
});
