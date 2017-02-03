var assert = require('assert');

describe('webdriver.io page', function() {
        it('Should have a mega menu.', function () {
                browser.url('https://aae.boisestate.edu');
                // Now reload. If the emergency alert overlay is up,
                // this will make it go away:
                // browser.reload();
		// browser.pause(3000);

                var mega_menu = browser.isExisting('#fw-mega-menu');
                assert(mega_menu);

                var mega_about_text = browser.getText("#fw-mega-menu #about a span");
                assert.equal(mega_about_text, 'ABOUT');

                var mega_about_text = browser.getText("#fw-mega-menu #admissions a span");
                assert.equal(mega_about_text, 'ADMISSIONS');

                var mega_about_text = browser.getText("#fw-mega-menu #academics a span");
                assert.equal(mega_about_text, 'ACADEMICS');

                var mega_about_text = browser.getText("#fw-mega-menu #research a span");
                assert.equal(mega_about_text, 'RESEARCH');

                var mega_about_text = browser.getText("#fw-mega-menu #administration a span");
                assert.equal(mega_about_text, 'ADMINISTRATION');

                var mega_about_text = browser.getText("#fw-mega-menu #giving a span");
                assert.equal(mega_about_text, 'GIVING');

                var mega_about_text = browser.getText("#fw-mega-menu #alumni a span");
                assert.equal(mega_about_text, 'ALUMNI');
        });
});
