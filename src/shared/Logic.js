var _ = require('lodash');





/**
 * @class shared.Logic
 * Returns the greatest product of 2 numbers from the array that
 * are multiples of 3.
 *
 *
 * **How to use?**
 * Make a new instance:
 *
 *     var logic = new Logic([1, 2, 3, 4, 5, 6]);
 *
 * And then calculate the value:
 *
 *     logic.calculate(); // Returns `30`;
 *
 * You can even change the initial numbers:
 *
 *     logic.setNumbers([1, 2, 3]);
 *
 * And calculate again:
 *
 *     logic.calculate(); // Returns `6`;
 *
 *
 * **Why a class and not a nested function?**
 * Using a class is better because we don't need to make complex, nested
 * hard to test functions. Also the function is more efficient and uses less memory
 * because doesn't create a new function each time you need to calculate a new value.
 * @param {Number[]} numbers
 */
var Logic = function(numbers){

    /**
     * Contains the initial numbers.
     * @private
     * @type {Number[]}
     */
    this.__numbers = numbers;

    /**
     * Stores the valid outputs.
     * @private
     * @type {Number[]}
     */
    this.__validOutputs = [];
}





_.extend(Logic.prototype, {



    /**
     * Overrides the initial numbers.
     * @param {Number[]} numbers
     */
    setNumbers: function(numbers){
        this.__numbers = numbers;
    },



    /**
     * Returns the greatest product of 2 numbers from the array that
     * are multiples of 3.
     * @param  {Number[]} numbers
     * @return {Number}
     */
    calculate: function(){
        if(this.__numbers.length < 2){
            throw new Error('The array length of number provided should be superior to 1')
        }
        this.__numbers = _.sortBy(this.__numbers);
        this.__permute(this.__numbers);
        var max = -Infinity;
        var validOutputs = this.__validOutputs;
        var l = this.__validOutputs.length;
        while(l--){
            max = Math.max(max, validOutputs[l]);
        }
        this.__validOutputs = [];
        if(max === -Infinity) return false;
        return max;
    },



    /**
     * Makes a single permutation and it will call itself.
     * @private
     * @param  {Number[]} numbers
     * @return {Number}
     */
    __permute: function(numbers, startAt){
        startAt = startAt === void 0 ? 0 : startAt;
        var l = numbers.length;
        if(startAt > l - 1) return;
        var product;
        while(l--){
            // Don't make the product of the number at the same index.
            if(l === startAt) continue;
            // Hint given to check if at least one of the number is a multiple of 3 is not useful
            // because doing 2 checks vs 1 check and multiplication is almost the same thing.
            // You still have to loop all numbers therefore still has complexity O(n^2) instead of O(n).
            product = numbers[startAt] * numbers[l];
            if(!this.__isValidOutput(product)) continue;
            this.__addValidOutput(product);
        }
        this.__permute(numbers, startAt + 1);
    },



    /**
     * Adds a valid output to the set.
     * @private
     * @param  {[type]} validOutput [description]
     * @return {[type]}             [description]
     */
    __addValidOutput: function(validOutput){
        this.__validOutputs.push(validOutput);
    },



    /**
     * Checks whenever is a valid output or not.
     * @private
     * @param  {Number} output
     * @return {Boolean} Returns true if is a valid output, false if is not valid.
     */
    __isValidOutput: function(output){
        var isMultipleOf3 = output % 3 === 0;
        return isMultipleOf3;
    }



})





module.exports = Logic;
