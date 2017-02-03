var assert = require('assert');
describe('webdriver.io page', function() {
        it('Should have an icon link of class=nav_home.', function() {
                browser.url('https://aae.boisestate.edu');
                // Now reload. If the emergency alert overlay is up,
                // this will make it go away:
                // browser.reload();
		// browser.pause(3000);
                var has_nav_home = browser.isExisting('a[class="nav_home"]');
                assert(has_nav_home);
        });
});
