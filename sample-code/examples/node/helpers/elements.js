
	var apps = require('./apps.js');

	// to access just the last part of the ID
	// for the purpose of .waitForElementById: split(/\//).splice(1,1)


// All Elements are defined by their ID.  Use "elementById" in script when calling these definitions.
	exports.loginScreen = {
		'userName'		 : 'com.i360.i360Walk:id/etLoginUsername',
		'password'		 : 'com.i360.i360Walk:id/etPassword',
		'logIn'			 : 'com.i360.i360Walk:id/btnLogin',
		'rememberMe'	 : 'com.i360.i360Walk:id/cbRemember',
		'forgotPassword' : 'com.i360.i360Walk:id/btnForgotPassword'
	}

	exports.homeScreen = {
		'walkbooks'		 : 'com.i360.i360Walk:id/btnWalkbooks',
		'voterLookup'    : 'com.i360.i360Walk:id/btnVoterLookup',
		'voterCheckIn'   : 'com.i360.i360Walk:id/btnVoterCheckIn',
		'eventCheckIn'   : 'com.i360.i360Walk:id/btnEventCheckIn',
		'signOut'        : 'com.i360.i360Walk:id/btnSignOut'
	}

	exports.walkbooks = {
		'search'     :  'com.i360.i360Walk:id/search',
		'survey1'    :  '',
		'survey2'    :  '',
		'survey3'    :  '',
		'survey4'    :  '',
		'survey5'    :  '',
		'survey6'    :  '',
		'survey7'    :  '',
		'survey8'    :  '',
		'survey9'    :  '',
		'survey10'   :  '',
		'logoutMenu' :  ''
	}