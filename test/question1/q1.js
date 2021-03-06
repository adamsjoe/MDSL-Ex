'use strict';

var helper = require('../../functions/helpers');
var q1Layout = require('../../layout/question1/inputFormPage');
var ips = require('../../functions/ipsum.js');
var rand = require('../../functions/randomGenerator.js');

describe('Scenario One Test', function() {
    it('should return the page title', function() {
        let expectedPageTitle = 'Selenium Easy - Input Form Demo with Validations';

        helper.setupReport('Scenario One', 'medium', 'Page Title should be correct');

        // grab the baseUrl from the browser oject
        let base = helper.getBaseUrl();

        // navigate to the page - append the page we want to visit
        helper.goToURL(base + 'input-form-demo.html');

        // check page title - basic check to make sure that we are on the correct page
        helper.verifyPageTitle(expectedPageTitle);
        
    });

    it('should have the elements present on page', function() {
        helper.setupReport('Scenario One', 'medium', 'Verify elements are present on the page');

        // grab the baseUrl from the browser oject
        let base = helper.getBaseUrl();

        // navigate to the page - append the page we want to visit
        helper.goToURL(base + 'input-form-demo.html');

        // We don't have a list of requirements for what should be there, so will just validate what is there at time of writing the text.
        // In this instance, this is a useless test, but demonstrates we can validate the presence of things.
        helper.verifyElementPresent(q1Layout.firstName);
        helper.verifyElementPresent(q1Layout.lastName);
        helper.verifyElementPresent(q1Layout.eMail);
        helper.verifyElementPresent(q1Layout.phoneNumber);
        helper.verifyElementPresent(q1Layout.address);
        helper.verifyElementPresent(q1Layout.city);
        helper.verifyElementPresent(q1Layout.state);
        helper.verifyElementPresent(q1Layout.zip);
        helper.verifyElementPresent(q1Layout.webhost);
        helper.verifyElementPresent(q1Layout.hosting);
        helper.verifyElementPresent(q1Layout.projectDesc);  
        
    });

    it('should allow a single form element to be filled in', function() {
        helper.setupReport('Scenario One', 'medium', 'Fill in a single form element');
        let base = helper.getBaseUrl();
        
        // navigate to the page
        helper.goToURL(base + 'input-form-demo.html');
        
        // we have no requirement for how long a text string can be on this page
        // so will create random strings each time the test runs.
        // This makes use of the random number generator AND random text generator
        //
        // The test also doesn't say we have to submit the form (nor give details of any endpoints to check against)

        // there are comments in the function/randomGenerator file which describe how the genRand function works.
        // In this instance it generates a number between 1 and 10 with no decimals (eg an int)
        let randomFirstName = ips.returnString(rand.genRand(1, 10, 0));
        helper.enterText(q1Layout.firstName, randomFirstName);

        browser.pause(3000);

        // validate that the text has actually been entered into the box
        helper.verifyTextFromInput(q1Layout.firstName, randomFirstName);                
    });    

    // This test is almost a duplicate of the one above, but only used to donstrate adding text to multiple elements
    it('should allow a multipe form elements to be filled in', function() {
        helper.setupReport('Scenario One', 'medium', 'Fill in multipe form elements');
        let base = helper.getBaseUrl();
        
        // navigate to the page
        helper.goToURL(base + 'input-form-demo.html');
        
        let randomFirstName = ips.returnString(rand.genRand(1, 10, 0));
        let randomLastName = ips.returnString(rand.genRand(1, 20, 0));
        let email = "nobody@somerandomsite.com"; // no validation on the page for emails - or this would have test on its' own.
        let phone = rand.genRand(11, 11, 0); // again no validation, so just generate a random number
        let address = ips.returnString(rand.genRand(1, 10, 0));
        let city = ips.returnString(rand.genRand(1, 10, 0));
        let zip = ips.returnString(rand.genRand(1, 10, 0));
        let web = "http://www.google.co.uk";
        let desc = ips.returnString(rand.genRand(1, 50, 0));
        
        helper.enterText(q1Layout.firstName, randomFirstName);
        helper.enterText(q1Layout.lastName, randomLastName);
        helper.enterText(q1Layout.eMail, email);
        helper.enterText(q1Layout.phoneNumber, phone);
        helper.enterText(q1Layout.address, address);
        helper.enterText(q1Layout.city, city);
        helper.enterText(q1Layout.zip, zip);        
        helper.enterText(q1Layout.webhost, web);
        // we shall cover the hosting question seperatley
        helper.enterText(q1Layout.projectDesc, desc);

        // validate that the text has actually been entered into the boxes
        helper.verifyTextFromInput(q1Layout.firstName, randomFirstName);                
        helper.verifyTextFromInput(q1Layout.lastName, randomLastName);                
        helper.verifyTextFromInput(q1Layout.eMail, email);                
        helper.verifyTextFromInput(q1Layout.phoneNumber, phone);                
        helper.verifyTextFromInput(q1Layout.address, address);                
        helper.verifyTextFromInput(q1Layout.city, city);                
        helper.verifyTextFromInput(q1Layout.zip, zip);                
        helper.verifyTextFromInput(q1Layout.webhost, web);                
        helper.verifyTextFromInput(q1Layout.projectDesc, desc);                
    
    });   
    
    it('should allow a radio button to be selected', function() {
        helper.setupReport('Scenario One', 'medium', 'Allow radio buttons to be selectable');
        // grab the baseUrl from the browser oject
        let base = helper.getBaseUrl();

        // navigate to the page - append the page we want to visit
        helper.goToURL(base + 'input-form-demo.html');

        // click the yes radio button
        helper.clickElement(q1Layout.yesVal);

        // validate
        helper.getElementSelectedStatus(q1Layout.yesVal);
        
    });    

    it('should allow a value to be selected from the dropdown', function() {
        helper.setupReport('Scenario One', 'medium', 'Allow Drop Down (Select) items to be selectable');
        // grab the baseUrl from the browser oject
        let base = helper.getBaseUrl();

        // navigate to the page - append the page we want to visit
        helper.goToURL(base + 'input-form-demo.html');

        // click the yes radio button
        helper.selectDropDownByValue(q1Layout.state, 'Nevada');
        
    });  
});