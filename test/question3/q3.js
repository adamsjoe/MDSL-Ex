'use strict';

var helper = require('../../functions/helpers');
var q2Layout = require('../../layout/question2/tableSortPage');
var ts = require('../../functions/tableStuff');

const page = 'table-sort-search-demo.html';
describe('Scenario Two Test', function() {
    it('should return the highest salary in the company is "$206850/y"', function() {
        helper.setupReport('Scenario Three', 'blocker', 'Verify the highest salary in the org');
        
        // the table contains the salary as $206,850/y - I will strip the all non numerics in the test to make the sorting easier
        let expectedHighestSalary = 206850;

        // grab the baseUrl from the browser oject
        let base = helper.getBaseUrl();

        // navigate to the page - append the page we want to visit
        helper.goToURL(base + page);

        // check page title - basic check to make sure that we are on the correct page
        helper.verifyPageTitle('Selenium Easy - Tabel Sort and Search Demo');

        // there is no "nice" selector for this element, if this were a project I would ask the devs to include a proper
        // selector as it would aid automation should a different input element be needed.
        // Enter "Software Engineer" into the box
        helper.enterText(q2Layout.search, 'Software Engineer');
        browser.pause(1000);

        // check the table is present
        helper.verifyElementPresent(q2Layout.table);

        // we don't need an averate on this so no need to get the results (though this could be useful in future tests)        
        let totalSalary = ts.getHighestSalary(q2Layout.table);

        helper.verifyValue(expectedHighestSalary, totalSalary);        
        
    });
      
});