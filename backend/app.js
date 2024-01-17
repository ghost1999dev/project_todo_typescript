'use strict';
let express = require('express');
let app = express();
let bodyparser = require('body-parser');
let mongoose = require('mongoose');
let port = process.env.PORT || 4201;
app.get('/ping', (req, res) => {
    console.log("Han hecho un ping");
});
app.listen(port, () => {
    console.log('servidor escuchando en el puerto' + port);
});
