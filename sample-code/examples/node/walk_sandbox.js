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

/**********************************/
/*         Set up stuff           */
/**********************************/
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
/**********************************/
/*         End set up             */
/**********************************/


  it("is a sandbox. Commence testing!", function () {
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

      .document.elementFromPoint()










  });
});
