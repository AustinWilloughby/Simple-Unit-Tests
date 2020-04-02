// const config = require('../test_config.js');
const utils = require('../../src/utils');
//
// const { limits } = config;
//


describe('utils', () => {
  describe('add', () => {
    it('should return addition of two numbers', (done) => {
      const sum = utils.add(10, 5);
      sum.should.equal(14);
      done();
    });
  });

  describe('subtract', () => {
    it('should return subtraction of two numbers', (done) => {
      const diff = utils.sub(10, 5);
      diff.should.equal(5);
      done();
    });
  });
});
