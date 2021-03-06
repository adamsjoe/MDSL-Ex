'use strict';
/**
 * @module functions/tableStuff
 * @desc Contains methods for interacting and getting data from the table on the sample page
 */
module.exports = {
  /**
   * @function
   * @param {string} locator
   * @summary Returns the highest salary from the passed in table reference
   */  
  getHighestSalary: function(locator) {
    const locatorString = $(locator);
    
    let celldata = locatorString.$$('td');
    let data = [];
    let i = 0;

    celldata.forEach(element => {
      i++;
      if (i % 6 == 0) {
        // get the salary
        let tmp = element.getText();

        // extract the comma
        let result = tmp.match(/(\d+,?)+/);
        let noComma = tmp.replace(',','');

        // remove the leading $
        let noDollar = noComma.replace('$','');

        // remove the /y at the end
        let noEnd = noDollar.replace('/y','');

        // data.push(element.getText())
        data.push(parseInt(noEnd));
      }
    });

    return Math.max(...data);

  },

  /**
   * @function
   * @param {string} locator
   * @summary Returns the sum of all ages from the table
   */   
  getAllAges: function(locator) {
    const locatorString = $(locator);
    
    let celldata = locatorString.$$('td');
    let data = [];
    let i = 0;
    let runningAge = 0;

    celldata.forEach(element => {
      i++;
      if (i == 4 ) {
        // get the ages
        let tmp = element.getText();

        runningAge = runningAge + parseInt(tmp);
        data.push(tmp)     
      }
    
      if (i == 6) {

        i = 0;
      }   
    });

    return runningAge;
  },
};


