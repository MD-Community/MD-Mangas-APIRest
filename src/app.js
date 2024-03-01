const express = require('express');
const app = express();

const mangasHome = require('./routes/home');
const getMangas = require('./routes/get-mangas');
const getMangasFeed = require('./routes/get-manga-feed');

app.use('/', mangasHome);
app.use('/mangas', getMangas);
app.use('/mangas/capitulos', getMangasFeed);

module.exports = app;
