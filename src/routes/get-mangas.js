const express = require('express')
const router = express.Router();

router.get('/:mangaId', async (req, res) => {
    try {
      const fetchedManga = await fetch(`https://api.mangadex.org/manga/${req.params.mangaId}`);
      const fetchedMangaData = await fetchedManga.json();
  
      if (!fetchedMangaData || !fetchedMangaData.data) {
        throw new Error('Não foi possível obter os dados do mangá');
      }
  
      const mangaData = fetchedMangaData.data;
      const formatedMangaData = {
        id: mangaData?.id,
  
        title: mangaData?.attributes.title['pt-br']
          || mangaData.attributes.title.en,
  
        description: mangaData?.attributes.description['pt-br']
          || mangaData.attributes.description.en,
  
        createdAt: mangaData?.attributes.createdAt,
        updatedAt: mangaData?.attributes.updatedAt,
        status: mangaData?.attributes.status,
        year: mangaData?.attributes.year,
      };
  
      res.status(200).json(formatedMangaData);
    }
    catch (error) {
      console.error('Erro na solicitação:', error);
      res.status(500).json('Erro interno');
    }
  });

  module.exports = router;