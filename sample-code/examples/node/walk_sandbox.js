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
        .click()
      // .waitForElementById('btnWalkbooks', 3000) // works
      .waitForElementById(walkbookID, 5000)

      // Open Walkbooks - Survey List
      .elementById(elements.homeScreen.walkbooks)
        .click().sleep(1000)
      // .elementById('com.i360.i360Walk:id/lvQuestions')

      // .then(function () {eval(pry.it); return this;})
      //     .elementByXPath('//android.widget.LinearLayout[@index="0"]').click()

      // .then(function () {eval(pry.it); return this;})
      //     .elementsByXPath('//android.widget.LinearLayout[contains(@index, "0")]').click()

      // .then(function () {eval(pry.it); return this;})
      //     .elementByXPath('//android.widget.FrameLayout[0]/android.view.ViewGroup[0]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[0]/android.widget.FrameLayout[0]/android.widget.RelativeLayout[0]/android.widget.ListView[0]/android.widget.LinearLayout[@index = 0]')
      //       .click()

      .then(function () {debugger; return this;})
      // .then(function () {eval(pry.it); return this;})
      .then(function (result) {
          try {
            return config.driver
            .elementByXPath('//android.widget.FrameLayout[0]/android.view.ViewGroup[0]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[0]/android.widget.FrameLayout[0]/android.widget.RelativeLayout[0]/android.widget.ListView[0]/android.widget.LinearLayout[@index = \'0\']')
          } catch (error) {
              done(new Error('Test failed.  Moving on.'));
          }
        })

      .then(function () {debugger; return this;})
      // .then(function () {eval(pry.it); return this;})
      return config.driver
        .then(function () {
          try {
          return config.driver
          .elementById(elements.homeScreen.walkbooks)
            .click().sleep(1000)
          .elementByXPath("//android.widget.LinearLayout[@index='0']/android.widget.TextView[@index='0']")
          } catch (error) {}
        })

      .then(function () {debugger; return this;})
      // .then(function () {eval(pry.it); return this;})
          .elementById(elements.homeScreen.walkbooks)
            .click().sleep(1000)
          var surveys = config.driver.elementsById('com.i360.i360Walk:id/lvQuestions')






// By.xpath("//*[@class='android.widget.ImageView'][@NAF='true']");


.elementById('android:id/content')
.elementById('com.i360.i360Walk:id/Body')
.elementById('com.i360.i360Walk:id/RelativeBody')
.elementById('com.i360.i360Walk:id/lvQuestions')




//******** LEFT OFF HERE *************//

      // Select the first survey

      .elementsById('com.i360.i360Walk:id/lvQuestions')
      .linearLayoutElement('6').click()

      

      // .frameLayoutChildren('com.i360.i360Walk:id/Body')
      // .then(function(els){
      //   return els[1].click();
      // })

      // .elementById('com.i360.i360Walk:id/lvQuestions')
      // .elementByXPath('//android.widget.LinearLayout[@index(0)]')
      //   .click()
    });
/*

  it('should try clicking the first survey', function () {
    var walkbookID = elements.homeScreen.walkbooks.split(/\//).splice(1,1).toString()
    return config.driver
      .waitForElementById(walkbookID, 3000)
      // .then(function () {console.log('before here we go'); return this;})
      .linearLayoutChildren('1')
      // .then(function () {console.log('after here we go'); return this;})
      .then(function(els) {
          return els[1].click();
      });
    });

*/

//    it('should try some things on the Walkbooks page', function () {
//        // should press the logout menu button
//        return config.driver
//  
//      /*  
//        .elementById('android:id/action_bar')
//        .then(function (opts) {
//          var action = new wd.TouchAction();
//          action
//            .press({x: 1328, y: 192})
//            .release();
//          return this.performTouchAction(action);
//        });
//  
//  
//        .then(function () {
//        var a1 = new wd.TouchAction()
//        a1.press({x: 1328, y: 192}).perform();
//      */
//  
//        // Logout from top right menu
//        .elementById('android:id/action_bar')
//        .elementByXPath('//android.widget.TextView[@index=1]')
//          .click().sleep(100)
//        .elementByXPath("//android.widget.TextView[@text='Log Out']")
//          .click().sleep(100)
//        .elementById('android:id/button1') // OK - confirm logout
//          .click()
//    });
//  
//    it('should click on the first survey', function () {
//      var walkbookID = elements.homeScreen.walkbooks.split(/\//).splice(1,1).toString()
//      return config.driver
//      .sleep(2000)
//      //login
//      .elementById(elements.loginScreen.rememberMe)
//        .click()
//      .elementById(elements.loginScreen.userName)
//        .sendKeys('test_1654wseward')
//      .elementById(elements.loginScreen.password)
//        .sendKeys('asdf')
//      .elementById(elements.loginScreen.logIn)
//        .click()
//      // .waitForElementById('btnWalkbooks', 3000) // works
//      .waitForElementById(walkbookID, 3000)
//  
//      // Open Walkbooks - Survey List
//      .elementById(elements.homeScreen.walkbooks)
//        .click().sleep(1000)
//  
//      // Select the first survey
//      .elementByXPath("//android.widget.LinearLayout[@index(0)]")
//      .elementById('com.i360.i360Walk:id/rlRowItem')
//        .click()
//    });

});
