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
 *
 *
 * **How it works under the hood?**
 *
 * First the numbers should be ordered.
 * Then the greatest product of 2 numbers of the array and multiple of 3 is calculated.
 * The trick which increase the performance is the way the items are looped. This happens in a
 * diagonal way from the top left to the bottom right. (Remember that at top left are the biggest
 * numbers).
 *
 * Here is an example:
 *
 * Input: `[4, 1, 5, 7]`;
 * Sorted array: `[7, 5, 4, 1]`;
 *
 * This is the map created:
 *
 *         7  5  4  1
 *         ----------
 *     7|  0  2  5  9
 *     5|  1  4  8  12
 *     4|  3  7  11 14
 *     1|  6  10 13 15
 *
 * The numbers in the table is the order of check.
 *
 * This map will have 7 (4 * 2 - 1) rows and are:
 *
 *  - 0; (0, 0) [1]
 *  - 1, 2; (0, 1), (0, 1) [2]
 *  - 3, 4, 5; (0, 2), (1, 1), (2, 0) [3]
 *  - 6, 7, 8, 9; (0, 3), (1, 2), (2, 1), (3, 1) [4]
 *  - 10, 11, 12; ...
 *  - 13, 14; ...
 *  - 15; ...
 *
 * The first numbers are the order are checked. The parenthesis numbers are the (x, y) indexes;
 * The number in the last parenthesis [i] is the length of the row.
 *
 * The ones that has the same index and the product is not a multiple of 3 are discarded.
 *
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

    this.__debug = false;
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
     * @return {Number}
     */
    calculate: function(){
        if(this.__numbers.length < 2){
            throw new Error('The array length of number provided should be superior to 1')
        }
        // Sort numbers desc.
        var numbers = _.sortBy(this.__numbers).reverse();
        var numbersLength = numbers.length;
        // The number of rows (as seen in the algorithm definition);
        var rows = numbersLength * 2 - 1;
        var rowValues;
        var rowLength = 0;
        // Side is 0 as long as it didn't passed after the half of the
        // square.
        var side = 0;
        // Contains the indexes of the numbers for each possible product.
        var nIndex1
        var nIndex2
        // This is the total sum of the indexes.
        var totalSum;
        // Whenever is in the first half including the middle row.
        var firstHalf;
        // Max product found.
        var max;
        // Loops each row.
        for(var i = 0; i < rows; i++){
            firstHalf = i <= numbersLength - 1
            if(firstHalf){
                rowLength += 1;
            }else{
                rowLength -= 1;
                side = 1;
            }
            totalSum = rowLength - 1;
            // Loops each item in the row.
            var max = -Infinity;
            for(var k = 0; k < rowLength; k++){
                if(side === 0){
                    nIndex1 = k;
                    nIndex2 = totalSum - k;
                }else{
                    nIndex1 = totalSum - k;
                    nIndex2 = k;
                }
                // Skip if has the same index (don't multiply each number for itself)
                if(nIndex1 === nIndex2) continue;
                var product = numbers[nIndex1] * numbers[nIndex2];
                if(!this.__isValidOutput(product)) continue;
                // We cannot return the product right away here. We need to find the higher
                // product of the row. There is no guarantee that the first product in this row
                // is the biggest in the whole row. We can only find this out at the end.
                max = Math.max(max, product)
                this.__debug && console.log(numbers, i, rowLength, nIndex1, nIndex2, max);
            }
            this.__debug && console.log('---------');
            if(max > -Infinity){
                return max;
            }
        }
        return false;
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
