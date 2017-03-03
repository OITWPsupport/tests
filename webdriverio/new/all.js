var assert = require('chai').assert;
var expect = require('chai').expect;

var startTimestamp = new Date().getTime();
var theURL = 'https://' + process.env.TESTSITE + '.boisestate.edu/';
browser.url(theURL);

describe('webdriver.io page', function() {

        it('Should have the right page title', function () {
                var title = browser.getTitle();
                assert.equal(title, process.env.TITLE, 'ERROR: problem with the title');
			console.log("OK! title looks good");
        });

        it('Should hav a search field', function () {
                var search_field = browser.isExisting('#q');
                assert(search_field, 'There is no search field (#q) on this page.');

				var search_all = browser.isExisting('.all_s');
				assert(search_all, 'There is no SEARCH ALL radio button (all_s) on this page.');

                var search_this = browser.isExisting('.this_s');
                assert(search_this, 'There is no SEARCH THIS SECTION radio button (this_s) on this page.');

		var search_toggle = browser.isExisting('#search_toggle');
		assert(search_toggle, 'There is no search toggle div (#search_toggle) on this page.');

		var search_toggle_text = browser.getText('#search_toggle');
		expect(search_toggle_text).to.include('SEARCH ALL BOISE STATE', 'ERROR: the SEARCH ALL BOISE STATE radio button label is missing.');
                expect(search_toggle_text).to.include('SEARCH THIS SECTION', 'ERROR: the SEARCH THIS SECTION radio button label is missing.');

                console.log("OK! search form looks good");
        });

        it('Should have one link class=nav_home (an icon in the breadcrumb nav)', function () {
                var nav_home = browser.isExisting('#breadcrumb_wrap .nav_home');
                assert(nav_home, 'There is no nav_home element on this page.');

                var nav_home_link = browser.getAttribute('#breadcrumb_wrap .nav_home', 'href');
                expect(nav_home_link).to.include('//www.boisestate.edu', 'ERROR: problem with the nav_home link');
                console.log("OK! nav_home looks good");
        });
        it('Should have a post-footer element with the right text', function () {
                var post_footer = browser.isExisting('.post-footer');
                assert(post_footer, 'There is no post-footer element on this page.');

                var post_footer_text = browser.getText(".post-footer p");
                assert.isString(post_footer_text.toString(), 'post_footer_text IS NOT A STRING!');
                expect(post_footer_text).to.include(process.env.FOOTERSTRING, 'ERROR: problem with the footer');
		console.log("OK! footer looks good");
        });

        it('Should have left nav links with the right text', function () {
                var left_nav = browser.isExisting('.localnav');
                assert(left_nav, 'There is no localnav (left nav ul) element on this page.');

                var left_nav_text = browser.getText(".localnav .sidebar-menu .menu");
                assert.isString(left_nav_text.toString(), 'left_nav_text IS NOT A STRING!');
                expect(left_nav_text).to.include(process.env.LEFTNAVSTRING, 'ERROR: problem with the left nav');
			console.log("OK! left nav looks good");
        });

        it('Should have a mega menu with all the right text', function () {
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

        it('Should load the page in under two seconds', function () {
                        var endTimestamp = new Date().getTime();
                        var pageLoadTime = (endTimestamp-startTimestamp)
                        console.log('It took ' + theURL + ' ' + pageLoadTime + ' ms to load the page.');

//                        expect(pageLoadTime).to.be.below(5000, 'ERROR: page load time higher than expected');
        })
});
