'use strict';

var helper = require('../../functions/helpers');
var q2Layout = require('../../layout/question2/tableSortPage');
var ts = require('../../functions/tableStuff');

const page = 'table-sort-search-demo.html';
describe('Scenario Three Test', function() {
    it('should return the average age of all San Fanciso based employees', function() {
        helper.setupReport('Scenario Two', 'critical', 'Verify the average age of all San Francisco based employees');
        let expectedAverageAge = 46;

        // grab the baseUrl from the browser oject
        let base = helper.getBaseUrl();

        // navigate to the page - append the page we want to visit
        helper.goToURL(base + page);

        // check page title - basic check to make sure that we are on the correct page
        helper.verifyPageTitle('Selenium Easy - Tabel Sort and Search Demo');

        // there is no "nice" selector for this element, if this were a project I would ask the devs to include a proper
        // selector as it would aid automation should a different input element be needed.
        // Enter "San Francisco" into the box
        helper.enterText(q2Layout.search, 'San Francisco');
        browser.pause(1000);

        // check the table is present
        helper.verifyElementPresent(q2Layout.table);

        // to make this test robust (or the first steps of this) we should get the number of results that San Fran will give,
        // this will allow us to work out the average.
        let resultsString = helper.getText(q2Layout.results);

        // results string now has "x to y of y entries (filtered from z total entries)
        // we shall use this regex to extract the numbers and then use the second array element to work out the average
        let numbers = resultsString.match(/\d+/g).map(Number);
        
        // get the total salary from the table
        let totalAge = ts.getAllAges(q2Layout.table);

        // get the average
        let averageAge = totalAge / numbers[2]; // numbers[2] contains the number in the "of x entries" in the string

        helper.verifyValue(expectedAverageAge, averageAge);        
        
    });
      
});