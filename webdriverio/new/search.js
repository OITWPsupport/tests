var assert = require('chai').assert;
var expect = require('chai').expect;

describe('webdriver.io page', function() {
        it('Should hav a search field', function () {
                var theURL = 'https://english.boisestate.edu/';
                browser.url(theURL);

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
});
