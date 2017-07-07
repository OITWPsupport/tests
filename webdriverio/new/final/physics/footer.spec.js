var assert = require('chai').assert;
var expect = require('chai').expect;
var paramslocal = require('./paramslocal.js');

describe('webdriver.io page', function() {
	before(function() {
                var theURL = paramslocal.theURL;
                browser.url(theURL);
	});

        it('Should have the right department name in the footer', function () {
		var footerText = browser.getText('#content > div.post-footer > p');
		expect(footerText).to.include(paramslocal.deptNameString, 'ERROR: problem with the footer (deptName)');
	});

        it('Should have the right phone number in the footer', function () {
                var footerText = browser.getText('#content > div.post-footer > p');
                expect(footerText).to.include(paramslocal.phoneNumberString, 'ERROR: problem with the footer (phone number)');
        });

        it('Should have the right email address in the footer', function () {
                var footerText = browser.getText('#content > div.post-footer > p');
                expect(footerText).to.include(paramslocal.emailAddressString, 'ERROR: problem with the footer (emailAddressString)');
        });

        it('Should have the right physical address in the footer', function () {
                var footerText = browser.getText('#content > div.post-footer > p');
                expect(footerText).to.include(paramslocal.addressString, 'ERROR: problem with the footer (addressString)');
        });
});
