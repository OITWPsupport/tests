var assert = require('chai').assert;
var expect = require('chai').expect;

describe('webdriver.io page', function() {
        it('Should have left nav links with the right text', function () {
		var theURL = 'https://' + process.env.TESTSITE + '.boisestate.edu/';
//		var theURL = 'https://aae.boisestate.edu/';
		browser.url(theURL);

                var left_nav = browser.isExisting('#menu-main-menu');
                assert(left_nav, 'There is no menu-main-menu (left nav ul) element on this page.');

                var left_nav_text = browser.getText("#menu-main-menu");
                assert.isString(left_nav_text.toString(), 'left_nav_text IS NOT A STRING!');
                expect(left_nav_text).to.include(process.env.LEFTNAVSTRING, 'ERROR: problem with the left nav');
//		expect(left_nav_text).to.include('HOME', 'ERROR: problem with the left nav');
		console.log("OK! left nav looks good");
        });
});

