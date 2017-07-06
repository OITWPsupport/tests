var assert = require('chai').assert;
var expect = require('chai').expect;
var paramslocal = require('./paramslocal.js');

describe('webdriver.io page', function() {
        it('Should hav a search field', function () {
                var theURL = paramslocal.theURL;
                browser.url(theURL);

                var search_field = browser.isExisting('#q');
                assert(search_field, theURL + ': There is no search field (#q).');

		var search_all = browser.isExisting('.all_s');
		assert(search_all, theURL + ': There is no SEARCH ALL radio button.');

                var search_this = browser.isExisting('.this_s');
                assert(search_this, theURL + ': There is no SEARCH THIS SECTION radio button (this_s).');

		var search_toggle = browser.isExisting('#search_toggle');
		assert(search_toggle, theURL + ': There is no search toggle div (#search_toggle).');

		var search_toggle_text = browser.getText('#search_toggle');
		expect(search_toggle_text).to.include('SEARCH ALL BOISE STATE', theURL + ': the SEARCH ALL BOISE STATE radio button label is missing.');
                expect(search_toggle_text).to.include('SEARCH THIS SECTION', theURL + ': the SEARCH THIS SECTION radio button label is missing.');

                // console.log(theURL + ': OK! search form looks good.');
        });
});
