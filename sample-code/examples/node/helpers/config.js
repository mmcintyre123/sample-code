var wd = require("wd");
var  _ = require('underscore');
var serverConfigs = require('./appium-servers');
var serverConfig = serverConfigs.local;
var desired;
exports.driver = wd.promiseChainRemote(serverConfig);
exports.elements = require('./elements')
exports.desired = process.env.npm_package_config_sauce ?
		      _.clone(require("./caps").android18) :
		      _.clone(require("./caps").android19);