var assert = require('assert');
describe('webdriver.io page', function() {
	it('Should list subsites', function () {

		// Go to the site's WP admin panel.
		// (Site was entered interactively when the script was called.)
		var theURL = 'https://' + process.env.TESTSITE + '.boisestate.edu/wp-admin/';
		browser.url(theURL);
		
		// Log in. (Credentials were entered when the script was called.)
		browser.waitForExist('#user_login');
		browser.setValue('#user_login', process.env.TESTUSER);
		browser.setValue('#user_pass', process.env.TESTPASS);
		browser.click('#wp-submit');
	
		browser.waitForExist("#wp-admin-bar-my-account", 3000);
		console.log('OK! Logged in successfully.');
	
		var greetingText = browser.getText("#wp-admin-bar-my-account .ab-item:nth-child(1)");
		console.log(greetingText);

		// Now go to the list of subsites. 
                var theURL = 'https://' + process.env.TESTSITE + '.boisestate.edu/wp-admin/network/sites.php';
                browser.url(theURL);
		browser.waitForExist("#the-list", 3000);
		var sitesList = browser.getText("//tbody[@id='the-list']//tr//td[1]//a[contains(@class, 'edit')]");
		console.log('Here is the list of subsites I can see:');
		console.log(sitesList);
	});
});
