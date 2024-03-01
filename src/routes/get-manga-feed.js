const express = require('express');
const router = express.Router();

router.get('/:mangaId', async (req, res) => {
  try {
    const fetchedMangasChapter = await fetch(`https://api.mangadex.org/manga/${req.params.mangaId}/feed?limit=10&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&includeFutureUpdates=1&order%5BcreatedAt%5D=asc&order%5BupdatedAt%5D=asc&order%5BpublishAt%5D=asc&order%5BreadableAt%5D=asc&order%5Bvolume%5D=asc&order%5Bchapter%5D=asc`);
    const fetchedChaptersData = await fetchedMangasChapter.json();

    const formatedChaptersData = await fetchedChaptersData?.data?.map((value) => {
      return {
        chapterId:
          value?.id,
        chapter:
          Number(value?.attributes?.chapter) + 1,
        translatedLanguage:
          value?.attributes?.translatedLanguage,
        publishedAt:
          value?.attributes?.publishAt,
        pages:
          value?.attributes?.pages,

      }
    })

    res.status(200).json(formatedChaptersData);

  }
  catch (error) {
    console.error('Erro na solicitação, ' + error);
    res.status(500).json('Not found');
  };

});

module.exports = router;