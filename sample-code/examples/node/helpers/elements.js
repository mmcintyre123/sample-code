
	var apps = require('./apps.js');

	// to access just the last part of the ID
	// for the purpose of .waitForElementById: split(/\//).splice(1,1)

	
	//test
	exports.actionBar = {
		'hamburgerMenuByXPath' :  '//android.widget.TextView[@index=1]',
		'search'			   :  'com.i360.i360Walk:id/search',
		'refresh'			   :  'com.i360.i360Walk:id/action_refresh',
		'add'  				   :  'com.i360.i360Walk:id/action_add' // this usually adds a contact or volunteer, depending on the context.
	}

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

	//test - especially books off page
	exports.walkbooks = {
		'survey1ByXpath'    :  '//android.widget.ListView/android.widget.LinearLayout[@index="0"]',
		'survey2ByXpath'    :  '//android.widget.ListView/android.widget.LinearLayout[@index="1"]',
		'survey3ByXpath'    :  '//android.widget.ListView/android.widget.LinearLayout[@index="2"]',
		'survey4ByXpath'    :  '//android.widget.ListView/android.widget.LinearLayout[@index="3"]',
		'survey5ByXpath'    :  '//android.widget.ListView/android.widget.LinearLayout[@index="4"]',
		'survey6ByXpath'    :  '//android.widget.ListView/android.widget.LinearLayout[@index="5"]',
		'survey7ByXpath'    :  '//android.widget.ListView/android.widget.LinearLayout[@index="6"]',
		'survey8ByXpath'    :  '//android.widget.ListView/android.widget.LinearLayout[@index="7"]',
		'survey9ByXpath'    :  '//android.widget.ListView/android.widget.LinearLayout[@index="8"]',
		'survey10ByXpath'   :  '//android.widget.ListView/android.widget.LinearLayout[@index="9"]'
	}

	//test
	exports.survey = {
		'previewQuestions' 	 :  'com.i360.i360Walk:id/tvSurveyPreview',		
		'start' 			 :  'com.i360.i360Walk:id/btnStartSurvey',		
		'gpsLocateMeByXPath' :  '//android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout[@index="2"]/android.widget.ImageView',
		'map' 				 :  '//android.widget.TextView[@text="Map"]',
		'list' 				 :  '//android.widget.TextView[@text="List"]',
		'walkbook1ByXpath' 	 :  '//android.widget.TabHost/android.view.View[@index="0"]',
		'walkbook2ByXpath' 	 :  '//android.widget.TabHost/android.view.View[@index="1"]',
		'walkbook3ByXpath' 	 :  '//android.widget.TabHost/android.view.View[@index="2"]'
	}