const request = require('supertest')
const app = require('../app')
const mangaId = 'e933dda0-c8a9-4285-b894-f66421471615'

describe('A test to route "/manga/:mangaId"', () => {
    it('should status === 200', async () => {
        const res = await request(app).get(`/mangas/${mangaId}`)
        expect(res.statusCode).toEqual(200)
    })
})