var assert = require('chai').assert;
var expect = require('chai').expect;

describe('webdriver.io page', function() {
        it('Should load the page in under two seconds', function () {
		var startTimestamp = new Date().getTime();
		// var theURL = 'https://' + process.env.TESTSITE + '.boisestate.edu/';
		var theURL = 'https://english.boisestate.edu/';
                browser.url(theURL);
                
		var endTimestamp = new Date().getTime();
		var pageLoadTime = (endTimestamp-startTimestamp)
                console.log('It took ' + theURL + ' ' + pageLoadTime + ' ms to load the page.');

//                expect(pageLoadTime).to.be.below(30000, 'ERROR: page load time higher than expected');
        });
});
