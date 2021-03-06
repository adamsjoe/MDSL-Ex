'use strict';
/**
 * @module functions/ipsum
 * @desc Random text generator
 */
module.exports = {
  /**
   * @function
   * @param {number} count
   * @returns {string} Random text string
   * @summary returns the either partial, or looped, string to the specified character limit
   */
  returnString: function(count) {
    var string =
      'Ipsum ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo et ea rebum.  Stet clita kasd gubergren, no sea takimata sanctus est Ipsum ipsum dolor sit amet.';
    var string2 = null;

    if (count > string.length) {
      var loop = Math.round(count / string.length);

      for (var i = 0; i <= loop; i++) {
        string2 += string;
      }

      return string2.substring(0, count).toLowerCase();
    } else {
      return string.substring(0, count).toLowerCase();
    }
  },
};