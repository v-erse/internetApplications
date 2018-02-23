const chai = require('chai');
const expect = chai.expect;
const request = require('superagent');
const status = require('http-status');

const apiRoot = 'http://localhost:3000/'

describe('server tests', function(){
  it('tests a GET request', function(done){
    request.get(apiRoot)
      .end(function(err,res){
        expect(res.statusCode).to.equal(status.OK);
        expect(err).to.not.be.an('error');
        expect(res.text).to.equal('Hello, World!')
      }
    )
    done();
  });

  it('tests a POST request', function(done){
    request.post(apiRoot)
      .end(function(err,res){
        expect(err).to.be.an('error');
        expect(res.statusCode).to.equal(status.METHOD_NOT_ALLOWED);
        done();
      });
  });
});
