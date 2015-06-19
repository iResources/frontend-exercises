var express = require('express');
var faker = require('faker');
var app = express();

function rand(low, high) {
    return Math.floor(Math.random() * high) + low; 
}

function createUser() {
    return {
        forename: faker.name.firstName(),
        img: faker.image.avatar(),
        surname: faker.name.lastName()
    }
}

function listMaker(length, creator) {
    return function () {
        var arr = [];

        while (arr.length < length) {
            arr.push(creator.apply(null, []));
        }
        return arr;
    }
}

var usersList = listMaker(10, createUser);

app.use('/', express.static(__dirname + '/app'));
app.get('/README.md', function (req, res) {
    res.sendfile(__dirname + '/README.md');
});

app.get('/users', function (req, res) {
    setTimeout(function () {
        res.send(usersList());
    }, rand(500, 2000));
});

app.listen(process.env.PORT || 3000);