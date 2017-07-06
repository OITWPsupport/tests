var assert = require('chai').assert;
var expect = require('chai').expect;
var params = require('../params.js');
var paramslocal = require('./paramslocal.js');

describe('webdriver.io page', function() {
        it('Should load the page in under ' + params.maxloadtime + ' miliseconds', function () {
		var startTimestamp = new Date().getTime();
		var theURL = paramslocal.theURL;
                browser.url(theURL);
                
		var endTimestamp = new Date().getTime();
		var pageLoadTime = (endTimestamp-startTimestamp)
                console.log('\n' + theURL + ': It took ' + pageLoadTime + ' ms to load the page.');

                expect(pageLoadTime).to.be.below(params.maxloadtime, theURL + ' ERROR: page load time higher than expected');
        });
});
