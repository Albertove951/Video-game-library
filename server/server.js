const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/game/:gamesearch', (req, res) => {
    axios({
        url: `https://api.rawg.io/api/games?page_size=8&search=${req.params.gamesearch}`,
        method: 'get',
    })
    .then(response => {
        res.status(200).send(response.data);
    })
});

module.exports = app;