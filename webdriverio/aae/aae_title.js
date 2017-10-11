var assert = require('assert');
describe('webdriver.io page', function() {
        it('Should have the right title.', function () {
                browser.url('https://aae.boisestate.edu');
                // Now reload. If the emergency alert overlay is up,
                // this will make it go away:
                // browser.reload();
		// browser.pause(3000);
                var title = browser.getTitle();
                assert.equal(title, 'Home - Advising and Academic Support Center - Boise State University');
        });
});
