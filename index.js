'use strict';

var express = require('express');
var ejs = require('ejs');

var app = new express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.set('views', __dirname);
app.use(express.static(__dirname));

app.set('view options', {
    layout: false
});

var server = app.listen(app.get('port'));

var sounds = require('./sounds.json');

app.get('/', function(req, res) {

    res.render('index', {
        sounds: sounds
    });

});
