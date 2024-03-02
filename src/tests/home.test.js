const request = require('supertest')
const app = require('../app')

describe('test route "/" ', () => {
    it('Should status === 200', async () => {
        const res = await request(app).get('/')
        
        expect(res.statusCode).toEqual(200)
    })
})