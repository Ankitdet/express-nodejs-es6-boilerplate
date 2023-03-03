
import chai from "chai";
import chaiHttp from "chai-http";
import { app } from '../../../index.js'

chai.use(chaiHttp)
chai.should()

describe('Health Endpoint', () => {
    it('should return 200 status code', (done) => {
        chai.request(app)
            .get('/v1/health')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.be.eql({ 'status': 'ok' });
                done()
            })
    })
})