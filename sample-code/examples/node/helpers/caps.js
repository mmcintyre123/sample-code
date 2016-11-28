exports.ios92 = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'iOS',
  platformVersion: '9.2',
  deviceName: 'iPhone 5s',
  app: undefined // will be set later
};

exports.ios81 = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'iOS',
  platformVersion: '8.1',
  deviceName: 'iPhone Simulator',
  app: undefined // will be set later
};

exports.android18 = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'Android',
  platformVersion: '4.3',
  deviceName: 'Android Emulator',
  app: undefined // will be set later
};

exports.android19 = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'Android',
  platformVersion: '4.4.2',
  deviceName: 'Android Emulator',
  newCommandTimeout: 999, // Default is 60 - 999 for testing.  Script will (more importantly) still stop after the this.timeout configured in each test.
  app: undefined // will be set later
};

exports.selendroid16 = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'Android',
  platformVersion: '4.1',
  automationName: 'selendroid',
  deviceName: 'Android Emulator',
  app: undefined // will be set later
};
