var assert = require('chai').assert;
var expect = require('chai').expect;

describe('webdriver.io page', function() {
        it('Should have the right page title', function () {
		var theURL = 'https://' + process.env.TESTSITE + '.boisestate.edu/';
		browser.url(theURL);

                var title = browser.getTitle();
                assert.equal(title, process.env.TITLE, 'ERROR: problem with the title');
		console.log("OK! title looks good");
        });
});
