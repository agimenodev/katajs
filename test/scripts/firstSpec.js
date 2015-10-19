global.chai = require('chai');
global.sinon = require('sinon');
global.expect = chai.expect;

var sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('Mocha', function() {
    it('expects using Chai', function() {
        expect(2 + 2).equals(4);
    });
});

describe('adder', function (){
    var adder = require('../../src/scripts/adder.js');
    it('', function(){
      var sum = adder(2,2);
      expect(sum).equals(4);
    });
});
