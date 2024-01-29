const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  try {
    const api = fetch('https://api.mangadex.org/manga')
    .then((res) => res.json())
    .then((data) => { res.json(data) });
  } 
  catch (error) {
    console.error('Erro na solicitação, ' + error);
    res.status(500).send('Erro interno');
  };
});

//https://api.mangadex.org/manga/30467594-1c02-476c-a5e1-85bbc0c243a7
app.get('/mangas/:manga', (req, res) => {
  try {
    const fetchApi = fetch(`https://api.mangadex.org/manga/${req.params.manga}`)
      .then((res) => res.json())
      .then((data) => { res.json(data) });
  } 
  catch (error) {
    console.error('Erro na solicitação, ' + error);
    res.status(500).send('Erro interno.');
  };
});

//https://api.mangadex.org/at-home/server/a54c491c-8e4c-4e97-8873-5b79e59da210
app.get('/mangas/:manga/:capitulo', (req, res) => {
  try {
    const fetchApi = fetch(`https://api.mangadex.org/at-home/server/${req.params.capitulo}`)
    .then((res) => res.json())
    .then((data) => { res.json(data) })
  } 
  catch (error) {
    console.error('Erro na solicitação, ' + error);
    res.status(500).send('Erro interno.')
  }
  
});

app.listen(port, () => console.log(`Iniciando API http://localhost:${port}`));
