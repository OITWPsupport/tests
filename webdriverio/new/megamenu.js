var assert = require('chai').assert;
var expect = require('chai').expect;

describe('webdriver.io page', function() {
        it('Should have a mega menu with all the right text', function () {
		var theURL = 'https://english.boisestate.edu/';
		browser.url(theURL);

                var post_footer = browser.isExisting('#fw-mega-menu');
                assert(post_footer, 'There is no mega menu element on this page.');

                var mega_menu_text = browser.getText("#fw-mega-menu");
                assert.isString(mega_menu_text.toString(), 'mega_menu_text IS NOT A STRING!');
                expect(mega_menu_text).to.include('RESEARCH', 'ERROR: \'RESEARCH\' is missing from megamenu');
		expect(mega_menu_text).to.include('ADMINISTRATION', 'ERROR: \'RESEARCH\' is missing from megamenu');
		expect(mega_menu_text).to.include('ABOUT', 'ERROR: \'RESEARCH\' is missing from megamenu');
		expect(mega_menu_text).to.include('ADMISSIONS', 'ERROR: \'ADMISSIONS\' is missing from megamenu');
		expect(mega_menu_text).to.include('ACADEMICS', 'ERROR: \'ACADEMICS\' is missing from megamenu');
		expect(mega_menu_text).to.include('GIVING', 'ERROR: \'GIVING\' is missing from megamenu');
		expect(mega_menu_text).to.include('ALUMNI', 'ERROR: \'ALUMNI\' is missing from megamenu');
        });
});

