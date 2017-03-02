const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {
  describe('All Products View', () => {
    it('/api/products sends status 200', () =>
      request(app)
        .get(`/api/products`)
        .expect(200)
    )
  })
})
