const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')

chai.use(chaiHttp)
chai.should();

describe('Direction API tests', () => {
    describe('GET /direction', () => {
        it('should return 400 bad request error when heading or target is missing', (done) => {
            const heading = 100
            chai.request(server)
                .get(`/direction?heading=${heading}`)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.message.should.equal('parameter heading or target missing.')
                    done(err);
                });
        })

        it('should return 400 bad request error when heading is not a number', (done) => {
            const heading = 'a'
            chai.request(server)
                .get(`/direction?heading=${heading}&target=10`)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.message.should.equal('heading is not a number.')
                    done(err);
                });
        })

        it('should return 400 bad request error when target is not a number', (done) => {
            const target = 'a'
            chai.request(server)
                .get(`/direction?heading=10&target=${target}`)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.message.should.equal('target is not a number.')
                    done(err);
                });
        })

        it('should return 400 bad request error when heading is not in the range of 0 to 359', (done) => {
            const heading = 366
            chai.request(server)
                .get(`/direction?heading=${heading}&target=200`)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.message.should.equal('heading should be ranging from 0 to 359.')
                    done(err);
                });
        })

        it('should return 400 bad request error when target is not in the range of 0 to 359', (done) => {
            const target = 366
            chai.request(server)
                .get(`/direction?heading=200&target=${target}`)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.message.should.equal('target should be ranging from 0 to 359.')
                    done(err);
                });
        })

        it('should return straight as direction response when heading == target', (done) => {
            const target = 200
            const heading = 200
            chai.request(server)
                .get(`/direction?heading=${heading}&target=${target}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.direction.should.equal('straight')
                    done(err);
                });
        })

        it('should return right as direction response when heading - target >= 180', (done) => {
            const target = 20
            const heading = 350
            chai.request(server)
                .get(`/direction?heading=${heading}&target=${target}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.direction.should.equal('right')
                    done(err);
                });
        })

        it('should return left as direction response when heading - target < 180', (done) => {
            const target = 200
            const heading = 350
            chai.request(server)
                .get(`/direction?heading=${heading}&target=${target}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.direction.should.equal('left')
                    done(err);
                });
        })

        it('should return left as direction response when target - heading >= 180', (done) => {
            const heading = 20
            const target = 350
            chai.request(server)
                .get(`/direction?heading=${heading}&target=${target}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.direction.should.equal('left')
                    done(err);
                });
        })

        it('should return right as direction response when target - heading < 180', (done) => {
            const heading =200
            const target = 350
            chai.request(server)
                .get(`/direction?heading=${heading}&target=${target}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.direction.should.equal('right')
                    done(err);
                });
        })
    })
})