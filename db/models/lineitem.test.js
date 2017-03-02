'use strict'

const db = require('APP/db')
const LineItem  = require('./lineitem')
const {expect} = require('chai')

describe('LineItem', () => {
  before('wait for the db', () => db.didSync)

  describe('Check LineItem Model', ()=> {
    //sample test, not necessary
    it('gettermethod itemTotal returns correct value', (done)=>{
      LineItem.create({
        description: "best product ever",
        price: 800,
        quantity: 2
      })
        .then(lineitem => {
           console.log("lineitem", lineitem)
           expect(lineitem.itemTotal).to.equal(1600);
          done()
        }).catch(done)
    })

  })
})




// 'use strict'
//
// const db = require('APP/db')
// const Order = require('./order')
// const Product = require('./product')
// const LineItem = require('./lineitem')
// const {expect} = require('chai')
//
// const seedUsers = () => db.Promise.map([
//   {name: 'so many', email: 'god@example.com', password: '1234'},
//   {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
// ], user => db.model('users').create(user))
//
// const seedProducts = () => db.Promise.map([
//   {title: 'Happiness', category: 'mental', price: 100, description: 'This jar of Happiness is guaranteed to make you the happiest person alive for 24 hours', inventory: 10},
//   {title: 'Elation', category: 'mental', price: 100, description: 'This jar of Elation is guaranteed to make provide you the mix of both worlds: happiness AND excitement, for 24 hours', inventory: 10},
//   {title: 'Relaxation', category: 'physical', price: 100, description: 'This jar of Relaxation is guaranteed to make give you the most satisfyingly restful experience for 24 hours', inventory: 10},
//   {title: 'I am Queen Bey', category: 'thoughts', price: 500, description: 'Have a party in a few hours? Do you feel super glum? This jar of Queen Bey is bound to give you the thoughts of the Queen, herself', inventory: 10},
//   {title: 'Christmas Morning', category: 'themes', price: 1000, description: 'This jar of Christmas Morning with have you laughing and HOHOHO-ing all the way to the North Pole - great for individuals who are less than festive and have children', inventory: 5}
// ], product => db.model('products').create(product))
//
// describe('LineItem', () => {
//   before('wait for the db', () => db.sync({force: true}))
//
//   describe('Create a LineItem', () => {
//     it('Creates a LineItem', () => {
//       LineItem.create({ price, description, quantity })
//         .then(user => user.authenticate('ok'))
//         .then(result => expect(result).to.be.true)
//     })
//   })
// })
