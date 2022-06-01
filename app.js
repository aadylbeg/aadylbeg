const express = require('express');
const res = require('express/lib/response');
const path = require('path')

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/test.html'));
  })

const server = app.listen(1111, () => {
    console.log(`App running on port ${1111}...`)
});