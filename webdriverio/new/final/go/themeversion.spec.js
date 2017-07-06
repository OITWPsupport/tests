var assert = require('chai').assert;
var expect = require('chai').expect;
var params = require('../params.js');
var paramslocal = require('./paramslocal.js');

describe('webdriver.io page', function() {
        it('Should have a meta tag indicating the current Framewerk version', function () {
		var theURL = paramslocal.theURL;
		browser.url(theURL);

		var themeversion = browser.getAttribute('[name="theme-version"]', 'content');
		expect(themeversion).to.equal(params.currentthemeversion);
        });
});
