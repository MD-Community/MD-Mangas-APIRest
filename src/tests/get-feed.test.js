const request = require('supertest')
const app = require('../app')
const mangaId = 'e933dda0-c8a9-4285-b894-f66421471615'

describe('Run and test the route "/mangas/:mangaId/feed"', () => {
    it('Should status === 200', async () => {
        const res = await request(app).get(`/mangas/capitulos/${mangaId}`)
        expect(res.statusCode).toEqual(200)
    })
})
