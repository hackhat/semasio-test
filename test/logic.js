require    = require('../getWebpackRequire');
var expect = require("chai").expect;
var Logic  = require('shared/Logic')




describe('logic', function(){



    var logic;



    beforeEach(function(){
        logic = new Logic();
    })



    it('Given an array of integers, find the maximum product between two numbers from the array, that is a multiple of 3.', function(){
        logic.setNumbers([1, 2, 3, 4, 5, 6]);
        expect(logic.calculate()).to.be.equal(30);
    })



    it('The result for the input {6,8,8,7,2,5} should be 48 = 6*8. Note that 8*8 is the greatest product (64) but 64 isn\'t divisible by 3.', function(){
        logic.setNumbers([6,8,8,7,2,5]);
        expect(logic.calculate()).to.be.equal(48);
    })



    it('Given the input {1,9,2,4} the result should be  36 = 9*4, and not 81 (9*9) since you should\'t multiply a number by itself.', function(){
        logic.setNumbers([6,8,8,7,2,5]);
        expect(logic.calculate()).to.be.equal(36);
    })



})
