const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const massive = require('massive');

require('dotenv').config();
// const controller = require('./controller.js');

const port = 3000;
const server = express();

server.use(bodyParser.json());




server.listen(port, function(){
    console.log(`Listening to ${port} `);
})