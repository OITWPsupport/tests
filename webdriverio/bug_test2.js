var assert = require('assert');
describe('webdriver.io page', function() {
	it('Should navigate to subsites', function () {

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

		// Now go to the list of subsites. 
                var theURL = 'https://' + process.env.TESTSITE + '.boisestate.edu/wp-admin/network/sites.php';
                browser.url(theURL);

		// If there are no subsites, this will fail.
		// If there are subsites, we'll wait for the list to populate, 
		// then click the 2nd one on the list.
		// (First one on the list is always the main site.)
		browser.waitForExist("[data-colname='URL'] a:first-child", 3500);
                browser.click("[data-colname='URL'] a:first-child");
                // browser.pause(1500);

	});

});
