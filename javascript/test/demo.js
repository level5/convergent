var chai = require('chai');
var should = chai.should();
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var chaiSubset = require('chai-subset');
chai.use(chaiSubset);

describe('xxx', () => {

  it('chai as promised', () => {
    return Promise.resolve({a: 10}).should.be.fulfilled;
  });

  it('property', () => {
    return Promise.reject({b: 10, c: 20})
            .should.be.rejected
            .then(function(obj) {
              obj.should.containSubset({b:10})
            })


  });
})
