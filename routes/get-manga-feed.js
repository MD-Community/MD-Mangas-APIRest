const express = require('express');
const router = express.Router();

router.get('/:mangaId', async (req, res) => {
    try {
      const fetchedMangasChapter = await fetch(`https://api.mangadex.org/manga/${req.params.mangaId}/feed?limit=10&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&includeFutureUpdates=1&order%5BcreatedAt%5D=asc&order%5BupdatedAt%5D=asc&order%5BpublishAt%5D=asc&order%5BreadableAt%5D=asc&order%5Bvolume%5D=asc&order%5Bchapter%5D=asc`);
      const fetchedChaptersData = await fetchedMangasChapter.json();
  
      res.status(200).json(fetchedChaptersData);
    }
    catch (error) {
      console.error('Erro na solicitação, ' + error);
      res.status(404).json('Not found');
    };
  
  });

  module.exports = router;