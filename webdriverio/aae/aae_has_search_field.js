var assert = require('assert');

describe('webdriver.io page', function() {
        it('Should have a search field.', function () {
                browser.url('https://aae.boisestate.edu');
                // Now reload. If the emergency alert overlay is up,
                // this will make it go away:
                // browser.reload();
		// browser.pause(3000);
                var search_all_radio = browser.isExisting('.all_s');
                assert(search_all_radio);
                var search_this_radio = browser.isExisting('.this_s');
                assert(search_this_radio);

                var search_all_text = browser.getText("[for='google']");
                var search_this_text = browser.getText("[for='section']");

                assert.equal(search_all_text, 'SEARCH ALL BOISE STATE');
                assert.equal(search_this_text, 'SEARCH THIS SECTION');
        });
});
