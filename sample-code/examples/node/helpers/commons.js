var localServer = require('./local-server');
var Commons = function(){};
var apps = require('./apps.js');
var prototype = require('prototypes');
var allPassed = true;
var driver;

console.log(Commons)

// Should run before all tests start
Commons.prototype.beforeAll = function () {
	var context = this;  // had to add
	before(function () {
	    localServer.start();
		// config.beforeAllStartTime = new Date().getTime(); // what is this for and how to set up?
		var config 		= require('./config')	// had to add; question: is there a reason these have to be here?  Can they be above?
		context.config 	= config;				// had to add; question: is there a reason these have to be here?  Can they be above?
		var driver  	= config.driver;
		var elements 	= config.elements;
		var desired 	= config.desired;
		// var beforeAllTime	= convertDate( (config.beforeAllEndTime - config.beforeAllStartTime)); // needs to be configured in config
		// console.log( 'beforeEachIt... ' + JSON.stringify(beforeAllTime)); //from Mike Meyer
		// config.loginTest 	= false; // what is this and how to set up?
		// config.currentTest 	= 'notStarted'; // what is this and how to set up?
	  require("./logging").configure(driver);
		desired.app = require("./apps").i360Walk;

		if (process.env.npm_package_config_sauce) {
	      desired.name = 'android - local server';
	      desired.tags = ['sample'];
	    }

	    return driver.init(desired);
	  });
};

//should run after (the last?) test ends
Commons.prototype.afterAll = function() {
	var config 		= require('./config')	// had to add; question: is there a reason these have to be here?  Can they be above?
	context.config 	= config;				// had to add; question: is there a reason these have to be here?  Can they be above?
	var driver = config.driver;
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
};

//should run after each test (after each 'it')
Commons.prototype.afterEach = function() {
	afterEach(function () {
	  allPassed = allPassed && this.currentTest.state === 'passed';
	});
};

// Example from Mike Meyer:
Commons.prototype.afterEachDes = function () {
	var context = this; // had to add
	after( function () {

		config.beforeEachDesEndTime = new Date().getTime();

		var allPassed;
		var config 		       =  require('./config')    // had to add
		context.config 	     =  config;                // had to add
		var assert 		       =  require( 'assert');
		var commons 	       =  require('./Commons.js');
		var driver 		       =  config.driver;
		var elements 	       =  config.elements;
		var lastUser 	       =  Store.get('lastUser');
		var afterEachDesTime =  convertDate((config.beforeEachDesEndTime - config.beforeEachDesStartTime)) //?

		console.log('afterEachDes... '.red + JSON.stringify(afterEachDesTime));

		if (config.currentTest != 'passed'
		&&	config.loginTest != true) {

			config.currentTest = 'notStarted';
			return driver
			.resetApp()
			.then(function () {
				return whereAmI();
			});
		} else if (config.loginTest ===true
			&&	   config.currentTest != 'passed') {

			console.log('Automation could not reset and complete due to a login failed test.')
		}
	})
};

exports.Commons = Commons;