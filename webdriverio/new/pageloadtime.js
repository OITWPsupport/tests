var assert = require('chai').assert;
var expect = require('chai').expect;

describe('webdriver.io page', function() {
        it('Should load the page in under two seconds', function () {
		var startTimestamp = new Date().getTime();
		var theURL = 'https://' + process.env.TESTSITE + '.boisestate.edu/';
                browser.url(theURL);
                
		var endTimestamp = new Date().getTime();
		var pageLoadTime = (endTimestamp-startTimestamp)
                console.log('Took ' + pageLoadTime + ' ms to load the page.');

                expect(pageLoadTime).to.be.below(20000);
        });
});
