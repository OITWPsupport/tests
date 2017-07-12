var expect = require('chai').expect;
var ThisPage = require('../../../pageobjects/webguide.page');

//
// These are the page-specific values to change for each new test
//
var testURL = 'https://webguide.boisestate.edu/google-analytics-training/';
var title = 'Google Analytics Training - Boise State Webguide';
var header = '';

describe('test suite for ' + testURL, function () {
    it('should load the page in under 7 seconds', function () {
        var path = testURL.substring(testURL.indexOf('.edu/')+4);
        var startTimestamp = new Date().getTime();
        ThisPage.open(path);
        ThisPage.footerDiv.waitForVisible();
        var endTimestamp = new Date().getTime();
        var pageLoadTime = (endTimestamp-startTimestamp);
        console.log('It took ' + pageLoadTime + ' ms to load the page.');
        expect(pageLoadTime).to.be.below(7000);
    });

    it('should verify the URL', function () {
        expect(ThisPage.currentURL).to.equal(testURL);
    } );

    it('should confirm that the search controls are present and correct', function () {
	expect(ThisPage.search_field).to.exist;
	expect(ThisPage.search_all).to.exist;
	expect(ThisPage.search_this).to.exist;
	expect(ThisPage.search_toggle).to.exist;
	expect(ThisPage.search_toggle_text).to.include('SEARCH ALL BOISE STATE');
	expect(ThisPage.search_toggle_text).to.include('SEARCH THIS SECTION');
    } );

    it('should confirm that the theme version is correct', function () {
	expect(ThisPage.themeversion).to.equal(ThisPage.currentthemeversion);
    } );

    it('should read the value of footer', function () {
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.deptNameString);
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.phoneNumberString);
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.emailAddressString);
	expect(ThisPage.footerDiv.getText()).to.include(ThisPage.addressString);
	// expect(ThisPage.header.getText()).to.equal(header);
	expect(ThisPage.post_footer).to.exist;
    });

    it('should check for the navigation back to www.boisestate.edu', function () {
	expect(ThisPage.nav_home).to.exist;
	expect(ThisPage.nav_home_link).to.equal('http://www.boisestate.edu/');
    });

    it.skip('should check the title', function () {
        expect(ThisPage.title).to.equal(title);
    });

    it('should check the mega menu', function () {
        expect(ThisPage.post_footer).to.exist;
        expect(ThisPage.mega_menu_text).to.include('RESEARCH');
        expect(ThisPage.mega_menu_text).to.include('ADMINISTRATION');
        expect(ThisPage.mega_menu_text).to.include('ABOUT');
        expect(ThisPage.mega_menu_text).to.include('ADMISSIONS');
        expect(ThisPage.mega_menu_text).to.include('ACADEMICS');
        expect(ThisPage.mega_menu_text).to.include('GIVING');
        expect(ThisPage.mega_menu_text).to.include('ALUMNI');
    });
});
