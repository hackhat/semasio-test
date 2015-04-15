var _ = require('lodash');





/**
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
    calculate: function(numbers){
        this.__permute(numbers);
    },



    /**
     * Makes a single permutation.
     * @private
     * @param  {Number[]} numbers
     * @return {Number}
     */
    __permute: function(numbers){
        var l = numbers.length;
        while(l--){

        }
    }



})





module.exports = Logic;
