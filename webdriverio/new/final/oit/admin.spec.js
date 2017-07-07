var assert = require('chai').assert;
var expect = require('chai').expect;
var paramslocal = require('./paramslocal.js');
var theAdminURL = paramslocal.theURL + 'wp-admin/';
var theLoginURL = paramslocal.theURL + 'wp-login.php';

describe('WP Admin screen', function() {
        before(function() {
                browser.url(theAdminURL);
        });

        it('should have a login form', function () {
		var username_field = browser.isExisting('#user_login');
                assert(username_field, 'There is no username field (#user_login).');
		var password_field = browser.isExisting('#user_pass');
		assert(password_field, 'There is no password field (#user_pass).');
        });

	it('should reject a bad login', function () {
		browser.url(theAdminURL);
		browser.setValue('#user_login', 'fakeuser');
		browser.setValue('#user_pass', 'fakepassword');
		browser.submitForm('#loginform');
		var resultURL = browser.getUrl();
		expect(resultURL).to.equal(theLoginURL, 'ERROR: bad login wasn\'t handled right.');
		var backLink = browser.isExisting('#backtoblog > a');
		assert(backLink, 'There is no link back to the blog (#backtoblog).');
		var backLinkHref = browser.getAttribute('#backtoblog > a', 'href');
		expect(backLinkHref).to.equal(paramslocal.theURL, 'ERROR: back to blog link isn\'t pointing to the right URL.');
		var errorDiv = browser.isExisting('#login_error');
		assert(errorDiv, 'There is no error message displayed.');
	});
});
