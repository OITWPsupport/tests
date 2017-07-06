var assert = require('chai').assert;
var expect = require('chai').expect;
var paramslocal = require('./paramslocal.js');

describe('webdriver.io page', function() {
        it('Should have the right page title', function () {
		var theURL = paramslocal.theURL;
		browser.url(theURL);

                var title = browser.getTitle();
                assert.equal(title, paramslocal.titleString, theURL + ': problem with the title');
		// console.log(theURL + ': OK! title looks good.');
        });
});
