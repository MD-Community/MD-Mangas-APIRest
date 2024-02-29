const express = require('express');
const app = express();
const port = 8080;

const mangasHome = require('./routes/home');
const getMangas = require('./routes/get-mangas');
const getMangasFeed = require('./routes/get-manga-feed');

app.use('/', mangasHome);
app.use('/mangas', getMangas);
app.use('/mangas/capitulos', getMangasFeed);

app.listen(port, () => console.log(`Iniciando API http://localhost:${port}`));
