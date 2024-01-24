const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});

app.get('/mangas/manga:/capitulo', (req, res) => {
  res.send(`${req.params.manga}`)
})

app.listen(8080, () => console.log('Iniciando API http://localhost:8080'));
