const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const fetchedMangas = await fetch('https://api.mangadex.org/manga?limit=10&includedTagsMode=AND&excludedTagsMode=OR&status%5B%5D=ongoing&availableTranslatedLanguage%5B%5D=pt-br&publicationDemographic%5B%5D=none&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&contentRating%5B%5D=pornographic&includes%5B%5D=manga&includes%5B%5D=cover_art&hasAvailableChapters=true');
        const fetchedMangasData = await fetchedMangas.json();
    
        const formatedMangasData = await fetchedMangasData?.data?.map((value) => {
          return {
            id: value?.id,
            title:
              value?.attributes?.title['pt-br'] ||
              value?.attributes?.title?.en ||
              value?.attributes?.title?.ja,
    
            description:
              value?.attributes?.description['pt-br'] ||
              value?.attributes?.description?.en ||
              value?.attributes?.description?.ja,
    
            cover_art: `https://uploads.mangadex.org/covers/${value.id}/${value?.relationships.find((i) => i.type === 'cover_art')?.attributes?.fileName}.256.jpg`,
          }
        })
    
        res.status(200).json(formatedMangasData);
    
      }
      catch (error) {
        console.error('Erro na solicitação, ' + error);
        res.status(500).json('Erro interno');
      };
})

module.exports = router;