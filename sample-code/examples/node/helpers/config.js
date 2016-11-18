var  _ = require('underscore');
var serverConfigs = require('./appium-servers');
var serverConfig = serverConfigs.local;
var desired;

var wd        = require("wd"); // new
var WdAndroid = require('wd-android'); // new
var wdAndroid = new WdAndroid(wd); // new

exports.driver = wdAndroid.promiseChainRemote(serverConfig);
exports.elements = require('./elements')
exports.desired = process.env.npm_package_config_sauce ?
		      _.clone(require("./caps").android18) :
		      _.clone(require("./caps").android19);