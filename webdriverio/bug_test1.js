var assert = require('assert');
describe('webdriver.io page', function() {
	it('Should preview pages', function () {

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

		// Go to the page that lists the site's pages:
                var theURL = 'https://' + process.env.TESTSITE + '.boisestate.edu/wp-admin/edit.php?post_type=page';
                browser.url(theURL);
		// Click the title of the first page on the list.
		browser.waitForExist("[data-colname='Title'] a:first-child", 3500);
		browser.click("[data-colname='Title'] a:first-child");  

		// Wait for the edit page form to load. Click the Preview Changes button.
		browser.waitForExist('#post-preview');
		browser.click('#post-preview');

		// In some browsers this opens a new tab.
		var my_tabs_array = browser.getTabIds();
		browser.switchTab(my_tabs_array[1]);

                // Is the page title 'WordPress › Error' ?
                var title = browser.getTitle();
                assert.notEqual(title, 'WordPress › Error', 'We are seeing the preview page error message.');
                // browser.waitForExist("#error-page");
                // var pageText = browser.getHTML('#error-page');
                // console.log(pageText);
	});
});
