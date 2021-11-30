const expect = require('chai').expect;
const request = require('request');
// const { TESTING_URL } = require('../../../constants/tests')
const TESTING_URL = "http://localhost:5000"
describe('User API', () => {
  describe('CREATE USER', () => {
    describe('Create user validation ERROR', () => {
      describe('Create user missing field', () => {
        const payload = {
          name: "",
          phone: "Doe",
          email: "johndoe@recraftrelic.com",
          password: "johndoe",
          InterestOfLearning:"bse"
        }
  
        it('Status', done => {
          request.post(`${TESTING_URL}/routes/api/auth/register`, {
            json: payload
          }, (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          })
        })
  
        it('Message', done => {
          request.post(`${TESTING_URL}/routes/api/auth/register`, {
            json: payload
          }, (_, response) => {
            expect(response.body.errors.name[0]).to.equal('First Name is required')
            done()
          })
        })
      })

      describe('Create user invalid email field', () => {
        const payload = {
          name: "name",
          phone: "Doe",
          email: "johndoe@recraftrelic.com",
          password: "johndoe",
         
        }
  
        it('Status', done => {
          request.post(`${TESTING_URL}/routes/api/auth/register`, {
            json: payload
          }, (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          })
        })
  
        it('Message', done => {
          request.post(`${TESTING_URL}/routes/api/auth/register`, {
            json: payload
          }, (_, response) => {
            expect(response.body.errors.email[0]).to.equal('Email is invalid')
            done()
          })
        })
      })

      describe('Create user duplicate', () => {
        const payload = {
          name: "John",
          phone: "Doe",
          email: "johndoe@recraftrelic.com",
          password: "johndoe",
         
        }
  
        it('Status', done => {
          request.post(`${TESTING_URL}/routes/api/auth/register`, {
            json: payload
          }, (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          })
        })
  
        it('Message', done => {
          request.post(`${TESTING_URL}/routes/api/auth/register`, {
            json: payload
          }, (_, response) => {
            expect(response.body.errors.duplicate[0]).to.equal('User with this email id already exist')
            done()
          })
        })
      })
    })

    it('Create user SUCCESS', done => {
      request.post(`${TESTING_URL}/routes/api/auth/register`, {
        json: {
          name: "John",
          phone: "Doe",
          email: "johndoe@recraftrelic.com",
          password: "johndoe",
         
        }
      }, (_, response) => {
        expect(response.statusCode).to.equal(200)
        done()
      })
    })
  })
})