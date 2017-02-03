var assert = require('assert');
describe('webdriver.io page', function() {
	it('Should log out', function () {

		// Go to the site's WP admin panel.
		// (Site was entered interactively when the script was called.)
		var theURL = 'https://' + process.env.TESTSITE + '.boisestate.edu/wp-admin/';
		browser.url(theURL);

		// Log in. (Credentials were entered when the script was called.)
		browser.waitForExist('#user_login');
		browser.setValue('#user_login', process.env.TESTUSER);
		browser.setValue('#user_pass', process.env.TESTPASS);
		browser.click('#wp-submit');
		browser.pause(1500);

/*
		// Log out and then go back to /wp-admin/ to make sure we're logged out:
		browser.pause(1500);
	 	browser.moveTo('#wp-admin-bar-my-account a');
		browser.click('#wp-admin-bar-logout a');
		browser.pause(2000);
		var title = browser.getTitle();
		assert.notEqual(title, 'WordPress › Error', 'We are seeing the logout error page.');
                var theURL = 'https://' + process.env.TESTSITE + '.boisestate.edu/wp-admin/';
                browser.url(theURL);
		// TODO: assert something here
*/
	});

});
