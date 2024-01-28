const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const api = fetch('https://api.mangadex.org/manga')
    .then((res) => res.json())
    .then((data) => { res.json(data) })
});

//https://api.mangadex.org/manga/30467594-1c02-476c-a5e1-85bbc0c243a7
app.get('/mangas/:manga', (req, res) => {
  const fetchApi = fetch(`https://api.mangadex.org/manga/${req.params.manga}`)
    .then((res) => res.json())
    .then((data) => { res.json(data) })
});

//https://api.mangadex.org/at-home/server/a54c491c-8e4c-4e97-8873-5b79e59da210
app.get('/mangas/:manga/:capitulo', (req, res) => {
  const fetchApi = fetch(`https://api.mangadex.org/at-home/server/${req.params.capitulo}`)
    .then((res) => res.json())
    .then((data) => { res.json(data) })
});

app.listen(port, () => console.log(`Iniciando API http://localhost:${port}`));
