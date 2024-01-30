const express = require('express');
const app = express();
const port = 8080;

app.get('/', async (req, res) => {
  try {
    const fetchedMangas = await fetch('https://api.mangadex.org/manga');
    const fetchedMangasData = await fetchedMangas.json();
    res.status(200).json(fetchedMangasData);

  }
  catch (error) {
    console.error('Erro na solicitação, ' + error);
    res.status(500).send('Erro interno');
  };
});

//https://api.mangadex.org/manga/30467594-1c02-476c-a5e1-85bbc0c243a7
app.get('/:manga', async (req, res) => {
  try {
    const fetchedMangas = await fetch(`https://api.mangadex.org/manga/${req.params.manga}`);
    const fetchedMangasData = await fetchedMangas.json();
    res.status(200).json(fetchedMangasData);

  }
  catch (error) {
    console.error('Erro na solicitação, ' + error);
    res.status(404).send('Not found');
  };
});

//https://api.mangadex.org/at-home/server/a54c491c-8e4c-4e97-8873-5b79e59da210
app.get('/:manga/:capitulo', async (req, res) => {
  try {
    const fetchedMangas = await fetch(`https://api.mangadex.org/at-home/server/${req.params.capitulo}`);
    const fetchedMangasData = await fetchedMangas.json();
    res.status(200).json(fetchedMangasData);

  }
  catch (error) {
    console.error('Erro na solicitação, ' + error);
    res.status(404).send('Not found');
  };

});

app.listen(port, () => console.log(`Iniciando API http://localhost:${port}`));
