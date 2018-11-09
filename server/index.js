const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.json({
        message: 'Connected'
    });
});

app.get('/streams', (req, res) => {
    fetch('https://api.twitch.tv/kraken/games/top/', {method: 'GET', headers: {Accept: 'application/vnd.twitchtv.v5+json', 'Client-ID': 'hyqpghizybh4sl8irf97j8sewpu0z9'}})
        .then(res => res.json())
        .then(result => {
            res.json({
                result
            });
        });
});