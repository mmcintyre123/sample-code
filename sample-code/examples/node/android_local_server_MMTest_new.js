"use strict";

require('colors');
require("./helpers/setup");

var actions  =  require('./helpers/actions');
var _p       =  require('./helpers/promise-utils');  // needed?
var _ = require('underscore');
var wd       =  require("wd"); // - move to config?
var Q                    =  require('q');


var elements  = require('./helpers/elements')
var simulator = false
var chai      = require("chai");
var assert    = chai.assert;
// var assert  = require('assert'); //needed?
var config  = require('./helpers/config')
chai.config.includeStack = true;
var commons = require('./helpers/commons').Commons;
var commonMethods = new commons();
var driver = config.driver;
var pry  =  require('pryjs');
// var actions = require('./helpers/actions')

wd.addPromiseChainMethod('swipe', actions.swipe);


describe("android local server", function () {

// Set up stuff

  // this.timeout(30000);
  this.timeout(33333333);
  commonMethods.beforeAll();
  commonMethods.afterAll();
  commonMethods.afterEach();

// Tests 

  it("should open the app", function () {
    var walkbookID = elements.homeScreen.walkbooks.split(/\//).splice(1,1).toString();
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
  });

  it("should open Walkbooks and Preview the Survey", function() {
    var previewSource
    return driver
      .elementById(elements.homeScreen.walkbooks)
        .click().sleep(3000)
      .waitForElementByName('and another one', 2000)
      .elementByName('and another one')
        .click()

      // Survey Preview Validations

      .elementByName('Preview Survey Questions')
        .click()
      .source().then(function (source) {
        previewSource = source;
        previewSource.should.include('and another one'); // survey title
        previewSource.should.include('Question 1');
        previewSource.should.include('Answer 1');
        previewSource.should.include('Answer 2');
      })
    });

  it('should select a walkbook, household, target, and take a survey', function () {
    return driver
      // Select a walkbook, list view, make assertions
      .back()
      .elementByName('Start')
        .click()
      .waitForElementByName('Select Walkbook', 2000)
      .elementByXPath("//android.widget.TextView[@text='List']")
        .click()
      .waitForElementByName('Walkbook 28', 2000)
      .elementByName('Walkbook 28')
        .click().sleep(1000)
      .waitForElementByName('Houses in Walkbook 28', 2000)
      .elementByXPath("//android.widget.TextView[@text='List']")
        .click()

      // Select a house & assertions

      .waitForElementByName('Parrott')
      .elementByName('Parrott')
        .click()

        //ASSERTIONS

      // select a target & assertions

      .waitForElementById('dispoVoterRowParent')
      .elementById('com.i360.i360Walk:id/dispoVoterRowParent')
        .click()

        //ASSERTIONS


      // take survey

      .waitForElementById('btnTakeSurvey', 2000 )
      .elementByName('Take Survey')
        .click()

        //ASSERTIONS

      .waitForElementByName('Answer 1', 2000)
      .elementByName('Answer 1')
        .click()
      .elementByName('Next')
        .click()
      .then(function () {eval(pry.it); return this;})
      .waitForElementById('Finished with Household', 2000)
      .elementByName('Finished with Household')
        .click()
  });
});
