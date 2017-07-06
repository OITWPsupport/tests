var assert = require('chai').assert;
var expect = require('chai').expect;

describe('webdriver.io page', function() {
        it('Should have the right page title', function () {
		var theURL = 'https://english.boisestate.edu/';
		browser.url(theURL);

                var title = browser.getTitle();
                assert.equal(title, 'English Department - English Department', 'ERROR: problem with the title');
		console.log("OK! title looks good");
        });
});
