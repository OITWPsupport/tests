var assert = require('assert');
describe('webdriver.io page', function() {

        it('Can search and get results.', function() {
                browser.url('https://aae.boisestate.edu');
		// Now reload. If the emergency alert overlay is up,
		// this will make it go away:
		// browser.reload();
		// browser.pause(3000);
                browser.setValue('#q','test search from OIT');
                browser.click('#searchsubmit');
                browser.pause(1500);
                var search_results_element = browser.isExisting('#resInfo-0');
                assert(search_results_element);
        });
});
