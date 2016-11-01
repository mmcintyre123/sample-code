
	var apps = require('./apps.js');

// All Elements are defined by their ID.  Use "elementById" in script when calling these definitions.
	exports.loginScreen = {
		'userName'		 : 'com.i360.i360Walk:id/etLoginUsername',
		'password'		 : 'com.i360.i360Walk:id/etPassword',
		'logIn'			 : 'com.i360.i360Walk:id/btnLogin',
		'rememberMe'	 : 'com.i360.i360Walk:id/cbRemember',
		'forgotPassword' : 'com.i360.i360Walk:id/btnForgotPassword'
	}

	exports.homeScreen = {
		'Walkbooks'		 : 'com.i360.i360Walk:id/btnWalkbooks',
		'Voter Lookup'   : 'com.i360.i360Walk:id/btnVoterLookup',
		'Voter Check-In' : 'com.i360.i360Walk:id/btnVoterCheckIn',
		'Event Check-In' : 'com.i360.i360Walk:id/btnEventCheckIn'
	}
