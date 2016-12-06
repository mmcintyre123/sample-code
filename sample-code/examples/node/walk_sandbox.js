"use strict";

require('colors');
require("./helpers/setup");

var actions  =  require('./helpers/actions');
var _p       =  require('./helpers/promise-utils');  // needed?
var _ = require('underscore');
var wd       =  require("wd"); // - move to config?
var Q                    =  require('q');
// var args     =  process.args.slice(2);

var elements             =  require('./helpers/elements')
var simulator            =  false
var chai                 =  require("chai");
var assert               =  chai.assert;
// var assert            =  require('assert');
var config               =  require('./helpers/config')
chai.config.includeStack =  true;
var commons              =  require('./helpers/commons').Commons;  // new
var commonMethods        =  new commons();  // new
var driver               =  config.driver;
var pry                  =  require('pryjs');


wd.addPromiseChainMethod('swipe', actions.swipe);

describe("android local server", function () {

// Set up stuff
  // this.timeout(30000); // use this for testing
  this.timeout(33333333); // use this for debugging with pry
  commonMethods.beforeAll();
  commonMethods.afterAll();
  commonMethods.afterEach();

// Tests

  it('should successfully select the first 10 surveys in the list '.green, function () {
    var walkbookID = elements.homeScreen.walkbooks.split(/\//).splice(1,1).toString()

    return driver

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
//      .elementByXPath(elements.walkbooks.survey1ByXpath).click().sleep(1000)
//        .back().sleep(1000)
//      .elementByXPath(elements.walkbooks.survey2ByXpath).click().sleep(1000)
//        .back().sleep(1000)
//      .elementByXPath(elements.walkbooks.survey3ByXpath).click().sleep(1000)
//        .back().sleep(1000)
//      .elementByXPath(elements.walkbooks.survey4ByXpath).click().sleep(1000)
//        .back().sleep(1000)
//      .elementByXPath(elements.walkbooks.survey5ByXpath).click().sleep(1000)
//        .back().sleep(1000)
//      .elementByXPath(elements.walkbooks.survey6ByXpath).click().sleep(1000)
//        .back().sleep(1000) 

  });


  it('Should scroll and click the last survey - First Attempt', function () {
    return driver
    
    // scroll the page
    
    .elementByXPath(elements.walkbooks.survey4ByXpath)
    .getLocation()
    .then(function (loc) {
      return driver.swipe({
              startX: loc.x, startY: loc.y,
              endX: loc.x, endY: loc.y - 800,
              duration: 800
            });
          })
    .sleep(1000)
    // .elementByXPath(elements.walkbooks.survey6ByXpath)
    // .isDisplayed().should.eventually.be.true

    .then(function myFunction(){
      var myels = driver.elementsByXPath('//android.widget.ListView/android.widget.LinearLayout')
      console.log(Object.keys(myels))
      driver.sleep(2000)
      console.log(myels)
      return myels
    })

    .then(function () {debugger; return this;})
    // .then(function () {eval(pry.it); return this;})

    .elementByXPath(elements.walkbooks.survey6ByXpath)
      .click().sleep(1000)
      .back().sleep(1000) // should open "MM Test Dynamic Survey - last survey in list"
  });


  it('should count the number of surveys in view', function () {
    return driver



  });






/*
  it("is a sandbox. Commence testing!", function () {
    var walkbookID = elements.homeScreen.walkbooks.split(/\//).splice(1,1).toString()

    return driver
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


//      // Select the first survey in the list
//      .elementByXPath('//android.widget.ListView/android.widget.LinearLayout[@index="0"]')
//        .click()
//

      // Logout from top right menu
        .elementByXPath('//android.widget.TextView[@index=1]')
          .click().sleep(100) // Hamburger menu
        // .elementById('android:id/title')
        .elementByName('Log Out')
          .click().sleep(100) // Log Out
        .elementById('android:id/button1')
          .click() // OK - confirm logout

//      .then(function () {eval(pry.it); return this;})
//      .then(function () {debugger; return this;})
//          .elementByClassName('android.widget.ListView')
//          .elementByXPath('//android.widget.LinearLayout[@index="2"]').click() // should be "and another one"
//
//      .then(function () {debugger; return this;})
//          .elementByXPath('//android.widget.LinearLayout[@index="2"]').click() // is this "and another one?"

    });
  */
});
