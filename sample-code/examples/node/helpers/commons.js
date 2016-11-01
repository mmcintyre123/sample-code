//pieces pulled from current walk test and Mike Meyer:
Commons.prototype.beforeAll = function () {

	// Should run before all tests start

	before(function () {

	    localServer.start();  //where does this go?

		config.beforeAllStartTime = new Date().getTime();

		var elements 		= config.elements; // ? Perhaps require('./helpers/elements') - in config
		var driver  		= config.driver; // see below - move to config
		var desired 		= config.desired; // see below - move to config
		var beforeAllTime	= convertDate( (config.beforeAllEndTime - config.beforeAllStartTime)); // needs to be configured in config
		config.loginTest 	= false; // needs to be configured in config
		config.currentTest 	= 'notStarted'; // needs to be configured in config

		console.log( 'beforeEachIt... ' + JSON.stringify(beforeAllTime));

	    //this should go in config:
	    var serverConfig = serverConfigs.local;
	    driver = wd.promiseChainRemote(serverConfig);
	    require("./helpers/logging").configure(driver);

	    //this should go in config:
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
}



// Example from Mike Meyer:

Commons.prototype.afterEachDes = function () {

	after( function () {

		config.beforeEachDesEndTime = new Date().getTime();

		var allPassed;
		var assert 				= require( 'assert');
		var commons 			= require('./Commons.js');
		var driver 				= config.driver;
		var elements 			= config.elements;
		var lastUser 			= Store.get('lastUser');
		var afterEachDesTime 	= convertDate((config.beforeEachDesEndTime - config.beforeEachDesStartTime)) //?

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
}