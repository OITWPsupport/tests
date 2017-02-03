var assert = require('assert');
describe('webdriver.io page', function() {
	it('Should preview pages (ctl)', function () {
		browser.url('https://ctl.boisestate.edu/wp-admin/');
		browser.setValue('#user_login', '');
		browser.setValue('#user_pass', '');
		browser.click('#wp-submit');
		browser.url('https://ctl.boisestate.edu/wp-admin/edit.php?post_type=page');
		browser.click("[data-colname='Title'] a:first-child");  
		browser.click('#post-preview');
		var my_tabs_array = browser.getTabIds();
		browser.switchTab(my_tabs_array[1]);
		var title = browser.getTitle();
		console.log(title);
		assert.notEqual(title, 'WordPress › Error', 'We are seeing the logout error page.');
		browser.url('https://ctl.boisestate.edu/wp-admin/');
//	 	browser.moveTo('#wp-admin-bar-my-account a');
//		browser.click('#wp-admin-bar-logout a');
		browser.url('https://ctl.boisestate.edu/wp-admin/');
	});

});
