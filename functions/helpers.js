'use strict';
/**
 * @module functions/helpers
 * @desc Contains helper methods for interacting with pages
 */

var assert = require('assert');
const { addDescription } = require('@wdio/allure-reporter').default;
const { addStep } = require('@wdio/allure-reporter').default;
const { addFeature } = require('@wdio/allure-reporter').default;
const { addSeverity } = require('@wdio/allure-reporter').default;
const { addAttachment } = require('@wdio/allure-reporter').default;

module.exports = {
  /**
   * @function
   * @param {string} feature
   * @param {string} severity
   * @param {string} desc
   * @summary Needed to setup the Allure report
   */
   setupReport: function (feature, severity, desc) {
    addFeature(feature);
    addSeverity(severity);
    addDescription(desc);
    addStep('Navigating to "' + browser.options.baseUrl + '"');
  },
  
  /**
   * @function
   * @return {string} baseUrl (config file stores this in browser object)
   * @summary returns with the baseUrl
   */
  getBaseUrl: function () {
    return browser.options.baseUrl;
  },

  /**
   * @function
   * @param {string} url
   * @summary Go to the specified URL
   */
  goToURL: function (url) {

    let message = 'Navigating to "' + url + '"';
    addStep(message);

    browser.url(url);
  },    

  getPageTitle: function() {
    return browser.getTitle();
  },

  /**
   * @function
   * @param {string} locator
   * @return {string} text from the element
   * @summary Returns the text from the specified element
   */
  getText: function (locator) {

    let message = 'Getting the text of the element with tag ' + locator;
    addStep(message);

    const locatorString = $(locator);

    var returnText = locatorString.getText();
 
    return returnText;
  },

   /**
   * @function
   * @param {string} locator element to get state of
   * @returns {boolean} true if checked, false if not
   * @summary Checks the "selected" state of the element - only for checkboxes
   */
  getElementSelectedStatus: function (locator) {
    let message = 'Getting the state of checkbox at "' + locator + '"';

    addStep(message);

    let element = $(locator);

    return element.isSelected();
  },

  /**
   * @function
   * @param {string} locator
   * @return {string} text from the element
   * @summary Returns the text from the specified element
   */
     getText: function (locator) {
  
      let message = 'Getting the text of the element with tag ' + locator;
      
      addStep(message);
      
      const locatorString = $(locator);
  
      var returnText = locatorString.getText();
  
      console.log(returnText);
  
      return returnText;
    },

  ///////////////////////////////////////////
  //
  // page validations
  //
  ///////////////////////////////////////////

  /**
   * @function
   * @param {string} locator
   * @summary Verify that an element is present
   */
  verifyElementPresent: function (locator) {
    let message = 'Verifing the element identified with "' + locator + '" can be found.';  

    addStep(message);

    const el = $(locator);

    assert(el.isExisting, 'Cannot find the element identified with "' + locator);
  },

  /**
   * @function
   * @param {string} expectedTitle
   * @summary Verify that the page title matches the parameter passed in
   */  
  verifyPageTitle: function(expectedTitle) {

    let message = 'Verifying that the page title matches "' + expectedTitle + '".'
    
    addStep(message);

    assert(expectedTitle === browser.getTitle(), "Expected '"+ expectedTitle + "' but got '" + browser.getTitle() + "' for page title.")

  },

  /**
   * @function
   * @param {string} locator
   * @param {string} expectedText
   * @summary Verifies text at the locator with a "known" string
   */
  verifyTextFromInput: function (locator, expectedText) {    
    let message = 'Verifying the text at "' + locator + '" is "' + expectedText + '"';

    addStep(message);

    const el = $(locator);

    // var actualText = el.getText();
    var actualText = el.getValue();

    assert(
      expectedText == actualText,
      'Expected "' + expectedText + '" but got "' + actualText + '".  The test has failed.',
    );
  },  

  /**
   * @function
   * @param {string} expected
   * @param {string} actual
   * @summary Default asserting of values.
   */
  verifyValue: function (expected, actual) {

    let message = 'Checking that values match';

    addStep(message);

    assert(expected === actual, 'Expected "' + expected + '" but got "' + actual + '".  The test has failed.');
  },
  

  ///////////////////////////////////////////
  //
  // page interactions
  //
  ///////////////////////////////////////////


  /**
   * @function
   * @param {element} locator
   * @summary Performs a click action on the element identified by locator
   */  
  clickElement: function (locator) {
    let message = 'Clicking element referenced as "' + locator + '"';

    addStep(message);

    const locatorString = $(locator);

    locatorString.click();
  },

  /**
   * @function
   * @param {string} locator
   * @param {string} text
   * @summary Enters the text at the specified text in the locator
   */  
  enterText: function (locator, text) {
    let message = 'Entering "' + text + '" into the field referenced as "' + locator + '"';

    addStep(message);

    var locatorString = $(locator);
    locatorString.waitForExist(10000);

    locatorString.setValue(text);
  },

  /**
   * @function
   * @param {string} locator
   * @param {string} value
   * @summary Selects the element in a dropdown using the value (text)
   */    
  selectDropDownByValue: function(locator, value) {
    let message = 'Selecting the "' + value + '" from the element refereced as "' + locator + '"';

    addStep(message);

    const locatorString = $(locator);
    locatorString.selectByVisibleText(value);
  }
}