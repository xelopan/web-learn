"use strict"
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('server/public'));

app.get('/', (req, res) => res.send('Hello Word!'));
app.get('/conquer', (req, res) => res.sendFile(path.join(__dirname, '/public/conquer.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}`));