const express = require('express');
const path = require('path');
const router = require('./src/router');

const app = express();

const pathToIndex = path.resolve(__dirname, '../client/index.html');

app.use('/*', (request, responce) =>{
    responce.sendFile(pathToIndex);
})
module.exports = app