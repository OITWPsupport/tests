var assert = require('chai').assert;
var expect = require('chai').expect;
var AdminPage = require('../pageobjects/admin.page');

describe('WP Admin screen', function() {
        it('should have a login form', function () {
		AdminPage.open();
                assert(AdminPage.user_login, 'There is no username field (#user_login).');
		assert(AdminPage.user_pass, 'There is no username field (#user_pass).');
        });
/*
	it('should reject a bad login', function () {
		AdminPage.open();
		AdminPage.user_login.setValue('fakeuser');
		AdminPage.user_pass.setValue('fakepass');
		AdminPage.submit();
		var resultURL = browser.getUrl();
		expect(resultURL).to.equal(theLoginURL, 'ERROR: bad login wasn\'t handled right.');
		var backLink = browser.isExisting('#backtoblog > a');
		assert(backLink, 'There is no link back to the blog (#backtoblog).');
		var backLinkHref = browser.getAttribute('#backtoblog > a', 'href');
		expect(backLinkHref).to.equal(paramslocal.theURL, 'ERROR: back to blog link isn\'t pointing to the right URL.');
		var errorDiv = browser.isExisting('#login_error');
		assert(errorDiv, 'There is no error message displayed.');
	});
*/
});
