
import chai from "chai";
import chaiHttp from "chai-http";
import { app } from '../../../index.js'

chai.use(chaiHttp)
chai.should()

describe('Sum /GET', () => {
    it('should return 400 when missing query param.', (done) => {
        chai.request(app)
            .get('/v1/sum')
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.be.eql({ 'error': 'Bad request' });
                done()
            })
    })
    it('should return 400 when num1 is not Number.', (done) => {
        chai.request(app)
            .get('/v1/sum?num2=100&num1=aaa')
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.be.eql({ 'error': 'num1 must be a number' });
                done()
            })
    })
    it('should return 400 when num2 is not Number.', (done) => {
        chai.request(app)
            .get('/v1/sum?num1=1000&num2=e')
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.be.eql({ 'error': 'num2 must be a number' });
                done()
            })
    })

    it('should return 200', (done) => {
        chai.request(app)
            .get('/v1/sum?num1=10&num2=40')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.be.eql({ 'result': 50 });
                done()
            })
    })
})


describe('Sum /POST', () => {
    it('should return 400 when missing request body.', (done) => {
        chai.request(app)
            .post('/v1/sum')
            .set('content-type', 'application/json')
            .send({})
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.be.eql({ 'error': 'Bad request' });
                done()
            })
    })
    it('should return 400 when num1 is not Number.', (done) => {
        chai.request(app)
            .post('/v1/sum')
            .set('content-type', 'application/json')
            .send({ num1: 'str', num2: 111 })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.be.eql({ 'error': 'num1 must be a number' });
                done()
            })
    })
    it('should return 400 when num2 is not Number.', (done) => {
        chai.request(app)
            .post('/v1/sum')
            .set('content-type', 'application/json')
            .send({ num1: 11, num2: 'sad' })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.be.eql({ 'error': 'num2 must be a number' });
                done()
            })
    })

    it('should return 200', (done) => {
        chai.request(app)
            .post('/v1/sum')
            .set('content-type', 'application/json')
            .send({ num1: 20, num2: 30 })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.be.eql({ 'result': 50 });
                done()
            })
    })
})