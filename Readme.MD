# semasio-test

This is a entry test for semasio.


## Requirements

 - Given an array of integers, find the maximum product between two numbers from the array, that is a multiple of 3.
 - The result for the input {6,8,8,7,2,5} should be 48 = 6*8. Note that 8*8 is the greatest product (64) but 64 isn't divisible by 3.
 - Given the input {1,9,2,4} the result should be  36 = 9*4, and not 81 (9*9) since you should't multiply a number by itself.



### Relevant files

 - [Logic](/src/shared/Logic.js);
 - [Tests](/test/logic.js);



### API

The API is [here](https://rawgit.com/hackhat/semasio-test/v1.0.0/docs/jsduck/index.html#!/api/shared.Logic).



## Install

 - Make sure you already have node.js installed;
 - Install mocha and istanbul globally `npm install mocha istanbul -g`;
 - Clone the project in a folder (let's say "semasio-test");
 - Open a command line and cd into the folder;
 - Run the command `npm install`;



## Run it

 - Run tests: `mocha`;
 - Run tests with code coverage: `npm test`;
