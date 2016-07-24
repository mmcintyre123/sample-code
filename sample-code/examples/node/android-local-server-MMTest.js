"use strict";

require("./helpers/setup");

var wd = require("wd");
var assert = require('assert');
var serverConfigs = require('./helpers/appium-servers');
// var args = process.args.slice(2);
// var config = require('./helpers/config')
// var actions = require('/helpers/actions')
//var elements = require('/helpers/elements')
var desired;
var simulator = false
var  _ = require('underscore');
var    localServer = require('./helpers/local-server');
// wd.addPromiseChainMethod('swipe', actions.swipe);


describe("android local server", function () {
  this.timeout(300000);
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
      .elementById('com.i360.i360Walk:id/etLoginUsername')
        .sendKeys('test_1654wseward')
      .elementById('com.i360.i360Walk:id/etPassword')
        .sendKeys('asdf')
      .elementById('com.i360.i360Walk:id/btnLogin')
        .click()
      .sleep(4000)
  });

  it("should open Walkbooks", function() {
    return driver
      .elementByName('Walkbooks')
        .click()
      .sleep(4000)
      .elementByName('and another one')
        .click()
      .elementByName('Preview Survey Questions')
        .click()
      .sleep(1000)
      .back()
      .elementByName('Start')
        .click()
      .sleep(2000)
      // .waitForElementByName('Select Walkbook')
      .elementByXPath("//android.widget.TextView[@text='List']")
        .click()
      .waitForElementById('com.i360.i360Walk:id/line1')
      .text().should.eventually.include('Walkbook 28')
      .elementByName('Walkbook 28')
        .click()
      .sleep(4000)
  });

});
