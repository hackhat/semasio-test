require       = require('../getWebpackRequire');
var expect    = require("chai").expect;
var Logic     = require('shared/Logic')
var Benchmark = require('benchmark').Benchmark;
var _         = require('lodash');





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
        logic.setNumbers([6, 8, 8, 7, 2, 5]);
        expect(logic.calculate()).to.be.equal(48);
    })



    it('Given the input {1,9,2,4} the result should be  36 = 9*4, and not 81 (9*9) since you should\'t multiply a number by itself.', function(){
        logic.setNumbers([1, 9, 2, 4]);
        expect(logic.calculate()).to.be.equal(36);
    })



    it('Should reset the internal cache after calculate.', function(){
        logic.setNumbers([1, 2, 3, 4]);
        expect(logic.calculate()).to.be.equal(12);
        logic.setNumbers([1, 2, 3]);
        expect(logic.calculate()).to.be.equal(6);
    })



    it('Should handle 0 length arrays.', function(){
        logic.setNumbers([]);
        expect(logic.calculate.bind(logic)).to.throw('The array length of number provided should be superior to 1');
    })



    it('Should handle 1 length arrays.', function(){
        logic.setNumbers([4]);
        expect(logic.calculate.bind(logic)).to.throw('The array length of number provided should be superior to 1');
    })



    it('Should handle no valid output.', function(){
        logic.setNumbers([1, 1]);
        expect(logic.calculate()).to.be.equal(false);
    })



    it('Should consider 0 as multiple (by definition).', function(){
        logic.setNumbers([0, 3]);
        expect(logic.calculate()).to.be.equal(0);
    })



    it.only('Should be a O(n) algorithm.', function(){
        this.timeout(60000);
        var suite = new Benchmark.Suite;
        var generateNNumbers = function(n){
            var items = [];
            _.times(n, function(){
                items.push(Math.round(((Math.random() - 0.5) * 100)))
            })
            return items;
        }

        suite.add('10 items', function(){
            logic.setNumbers(generateNNumbers(10));
            logic.calculate();
        })
        .add('100 items', function(){
            logic.setNumbers(generateNNumbers(100));
            logic.calculate();
        })
        .on('complete', function(){
            var results = this;
            // results.forEach(function(suite){
            //     console.log(suite.name, suite.stats.mean)
            // })
            // console.log(results[1].stats.mean / results[0].stats.mean);
            expect(results[1].stats.mean / results[0].stats.mean).to.be.within(7.5, 12.5);
        })
        .run({'async': false});
    })



})
