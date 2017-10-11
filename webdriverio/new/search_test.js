var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

var assert = require('assert');
var URL = 'https://test.boisestate.edu/'; // KEEP the trailing slash
var searchString = 'jessen';

describe('webdriver.io page', function() {
    it('should submit a search', function () {
        browser.url(URL);
        browser.waitForExist('#q', 5000);
        browser.setValue('#q', searchString);
        browser.click('#searchsubmit');
    });
    it('should have the proper page element for the 2.0 API\'s search results', function () {
	browser.waitForExist('#resInfo-0', 5000);
	chai.expect('#resInfo-0').to.be.there();
    });
    it('should not have the page element from the old 1.0 API\'s search results', function () {
	// gcsc-branding is a page element present in the results page of 
	// the old search that should not show up in the revised search
	chai.expect('.gcsc-branding').to.not.be.there();
    });
    it('should have the search box on the search results page', function() {
	chai.expect('#gsc-i-id1').to.be.there();
    });
    it('should end up at a URL that contains the q and site parameters', function() {
	var expectedResultURL = URL + '?q=' + searchString + '&site=boisestate.edu';
	var actualResultURL = browser.getUrl();
	assert.equal(expectedResultURL, actualResultURL);
    });
});
