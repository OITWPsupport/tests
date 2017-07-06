var assert = require('chai').assert;
var expect = require('chai').expect;
var paramslocal = require('./paramslocal.js');

describe('webdriver.io page', function() {
        it('Should have a mega menu with all the right text', function () {
		var theURL = paramslocal.theURL;
		browser.url(theURL);

                var post_footer = browser.isExisting('#fw-mega-menu');
                assert(post_footer, theURL + ': There is no mega menu element.');

                var mega_menu_text = browser.getText("#fw-mega-menu");
                assert.isString(mega_menu_text.toString(), theURL + ': mega_menu_text IS NOT A STRING!');
                expect(mega_menu_text).to.include('RESEARCH', theURL + ': \'RESEARCH\' is missing from megamenu');
		expect(mega_menu_text).to.include('ADMINISTRATION', theURL + ': \'ADMINISTRATION\' is missing from megamenu');
		expect(mega_menu_text).to.include('ABOUT', theURL + ': \'ABOUT\' is missing from megamenu');
		expect(mega_menu_text).to.include('ADMISSIONS', theURL + ': \'ADMISSIONS\' is missing from megamenu');
		expect(mega_menu_text).to.include('ACADEMICS', theURL + ': \'ACADEMICS\' is missing from megamenu');
		expect(mega_menu_text).to.include('GIVING', theURL + ': \'GIVING\' is missing from megamenu');
		expect(mega_menu_text).to.include('ALUMNI', theURL + ': \'ALUMNI\' is missing from megamenu');
        });
});

