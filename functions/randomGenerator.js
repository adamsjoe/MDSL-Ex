'use strict';
/**
 * @module functions/randomGenerator
 * @desc Random Number Generator
 */

module.exports = {
  /**
   * @function
   * @param {number} min 
   * @param {number} max 
   * @param {number} decimalPlaces 
   * @returns {number} Returns a random number
   * @summary Returns a random number to the specified format
   */
  genRand: function(min, max, decimalPlaces) {
    var rand = Math.random() * (max - min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
  },
};