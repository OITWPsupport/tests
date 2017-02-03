var assert = require('assert');
describe('webdriver.io page', function() {
	it('Should preview pages (emergencymanagement)', function () {
		browser.url('https://emergencymanagement.boisestate.edu/wp-admin/');
		browser.setValue('#user_login', 'admin-em');
		browser.setValue('#user_pass', '');
                browser.click('#wp-submit');
                browser.url('https://emergencymanagement.boisestate.edu/wp-admin/edit.php?post_type=page');
                browser.click("[data-colname='Title'] a:first-child");
                browser.click('#post-preview');
                var my_tabs_array = browser.getTabIds();
		browser.switchTab(my_tabs_array[1]);
                var title = browser.getTitle();
                console.log(title);
                assert.notEqual(title, 'WordPress › Error');
		browser.url('https://emergencymanagement.boisestate.edu/wp-admin/');
        });

});

