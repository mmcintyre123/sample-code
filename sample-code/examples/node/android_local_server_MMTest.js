"use strict";

require("./helpers/setup");

var wd = require("wd");
var assert = require('assert');
var serverConfigs = require('./helpers/appium-servers');
// var args = process.args.slice(2);
// var config = require('./helpers/config')
// var actions = require('./helpers/actions.')
var elements = require('./helpers/elements')
var desired;
var simulator = false
var  _ = require('underscore');
var    localServer = require('./helpers/local-server');
// wd.addPromiseChainMethod('swipe', actions.swipe);
var chai = require("chai");
chai.config.includeStack = true;
var assert = chai.assert;


describe("android local server", function () {
  this.timeout(30000);
  var driver;
  var allPassed = true;

  before(function () {
    localServer.start();
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired = process.env.npm_package_config_sauce ?
      _.clone(require("./helpers/caps").android18) :
      _.clone(require("./helpers/caps").android19);
    desired.app = require("./helpers/apps").i360Walk;
    if (process.env.npm_package_config_sauce) {
      desired.name = 'android - local server';
      desired.tags = ['sample'];
    }
    return driver.init(desired);
  });

  after(function () {
    localServer.stop();
    return driver
      .quit()
      .finally(function () {
        if (process.env.npm_package_config_sauce) {
          return driver.sauceJobStatus(allPassed);
        }
      });
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });


  it("should open the app", function () {
    return driver
      .elementById(elements.loginScreen.rememberMe)
        .click().sleep(500)
      .elementById(elements.loginScreen.userName)
        .sendKeys('test_1654wseward')
      .elementById(elements.loginScreen.password)
        .sendKeys('asdf')
      .elementById(elements.loginScreen.logIn)
        .click().sleep(2000)
      .waitForElementById(elements.homeScreen.Walkbooks, 2000);
  });

  it("should open Walkbooks and Preview the Survey", function() {
    var previewSource;
    return driver
      .elementByName('Walkbooks')
        .click().sleep(1000)
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
      
      .waitForElementByName('Keene')
      .elementByName('Keene')
        .click()

        //ASSERTIONS
        
      // select a target & assertions
      
      .waitForElementById('dispoVoterRowParent')
      .elementById('com.i360.i360Walk:id/dispoVoterRowParent')
        .click()

        //ASSERTIONS


      // take survey
      
      .waitForElementById( 'Take Survey', 2000 )
      .elementByName('Take Survey')
        .click()

        //ASSERTIONS

      .waitForElementByName('Answer 1', 2000)
      .elementByName('Answer 1')
        .click()
      .elementByName('Next')
        .click()
      .waitForElementById('Finished with Household', 2000)
      .elementByName('Finished with Household')
        .click()
  });
});
