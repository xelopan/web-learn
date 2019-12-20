"use strict"
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('client/public'));

app.get('/', (req, res) => res.send('Hello Word!'));
app.get('/conquer', (req, res) => res.sendFile(path.join(__dirname, '../client/public/conquer.html')));
app.get('/mypage', (req, res) => res.sendFile(path.join(__dirname, '../client/page.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}`));