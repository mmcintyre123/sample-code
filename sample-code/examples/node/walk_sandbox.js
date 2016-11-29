"use strict";

require("./helpers/setup");

// var actions  =  require('./helpers/actions');
// var _p       =  require('./helpers/promise-utils');  // needed?
// var Q        =  require('q'); // needed?
// var wd       =  require("wd"); // - move to config?
// var args     =  process.args.slice(2);
// wd.addPromiseChainMethod('swipe', actions.swipe);

var elements             =  require('./helpers/elements')
var simulator            =  false
var chai                 =  require("chai");
var assert               =  chai.assert;
// var assert            =  require('assert');
var config               =  require('./helpers/config')
chai.config.includeStack =  true;
var commons              =  require('./helpers/commons').Commons;  // new
var commonMethods        =  new commons();  // new
var pry                  =  require('pryjs')

describe("android local server", function () {

// Set up stuff

  // this.timeout(30000); // use this for testing
  this.timeout(33333333); // use this for debugging with pry
  commonMethods.beforeAll();
  commonMethods.afterAll();
  commonMethods.afterEach();

// Tests

  it('should successfully select the first 10 surveys in the list ', function (done) {
    var walkbookID = elements.homeScreen.walkbooks.split(/\//).splice(1,1).toString()
    var a = config.driver

    return a

      .elementById(elements.loginScreen.rememberMe)
        .click()
      .elementById(elements.loginScreen.userName)
        .sendKeys('test_1654wseward')
      .elementById(elements.loginScreen.password)
        .sendKeys('asdf')
      .elementById(elements.loginScreen.logIn)
        .click().sleep(1000)
      .waitForElementById(walkbookID, 5000)

      // Open Walkbooks - Survey List
      .elementById(elements.homeScreen.walkbooks)
        .click().sleep(3000)

      // Open each survey in the list.
      .elementByXPath(elements.walkbooks.survey1ByXpath).click().sleep(1000)
        .back().sleep(1000)
      .elementByXPath(elements.walkbooks.survey2ByXpath).click().sleep(1000)
        .back().sleep(1000)
      .elementByXPath(elements.walkbooks.survey3ByXpath).click().sleep(1000)
        .back().sleep(1000)
      .elementByXPath(elements.walkbooks.survey4ByXpath).click().sleep(1000)
        .back().sleep(1000)
      .elementByXPath(elements.walkbooks.survey5ByXpath).click().sleep(1000)
        .back().sleep(1000)
      .elementByXPath(elements.walkbooks.survey6ByXpath).click().sleep(1000)
        .back().sleep(1000) 

      // LEFT OFF HERE 
      // must scroll screen before this
      .elementByXPath(elements.walkbooks.survey7ByXpath).click().sleep(1000)
        .back().sleep(1000)

      done();

  });




  it("is a sandbox. Commence testing!", function () {
    var walkbookID = elements.homeScreen.walkbooks.split(/\//).splice(1,1).toString()
    var a = config.driver

    return config.driver
      //login
      .elementById(elements.loginScreen.rememberMe)
        .click()
      .elementById(elements.loginScreen.userName)
        .sendKeys('test_1654wseward')
      .elementById(elements.loginScreen.password)
        .sendKeys('asdf')
      .elementById(elements.loginScreen.logIn)
        .click().sleep(1000)
      // .waitForElementById('btnWalkbooks', 3000) // works
      .waitForElementById(walkbookID, 5000)

      // Open Walkbooks - Survey List
      .elementById(elements.homeScreen.walkbooks)
        .click().sleep(3000)

/*
      // Select the first survey in the list
      .elementByXPath('//android.widget.ListView/android.widget.LinearLayout[@index="0"]')
        .click()
*/

      // Logout from top right menu
        .elementByXPath('//android.widget.TextView[@index=1]')
          .click().sleep(100) // Hamburger menu
        // .elementById('android:id/title')
        .elementByName('Log Out')
          .click().sleep(100) // Log Out
        .elementById('android:id/button1')
          .click() // OK - confirm logout



/*
      // .then(function () {eval(pry.it); return this;})
      .then(function () {debugger; return this;})
          .elementByClassName('android.widget.ListView')
          .elementByXPath('//android.widget.LinearLayout[@index="2"]').click() // should be "and another one"

      .then(function () {debugger; return this;})
          .elementByXPath('//android.widget.LinearLayout[@index="2"]').click() // is this "and another one?"
*/

    });
});
