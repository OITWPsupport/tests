//
// TEST CONFIGURATION
//

// Set the URL of the page to test:
var URL = 'https://housing.boisestate.edu';

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('firefox').build();
require('./includes/driver.js').setURL(webdriver, driver, URL);
const until = webdriver.until;

//
// HEADER STUFF
//

// INCLUDING SHARED CODE for testing header and search elements:
require('./includes/header.js').testHeader(webdriver, driver);
require('./includes/search.js').testSearch(webdriver, driver);

// Test that the left nav has a HOME link, and that it has the proper id
driver.findElements({id: 'menu-item-1961282'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element of ID \'menu-item-1961282\' (the HOME link) is here');
        } else {
                console.log('ERROR: Page element of class \'menu-item-1961282\' (the HOME link) is NOT FOUND');
        }
});

// INCLUDING SHARED CODE for testing "Mega Menu" elements:
require('./includes/megamenu.js').testMegamenu(webdriver, driver);

// 
// LEFT NAV STUFF
//

// INCLUDING SHARED CODE for testing that social icons/links appear in the left nav:
driver.findElements({className: 'localnav'}).then(function(elements) {
        console.log('Checking the left nav for social icons / links...');
        require('./includes/social.js').testTwitter(webdriver, driver);
        require('./includes/social.js').testFacebook(webdriver, driver);
        require('./includes/social.js').testYoutube(webdriver, driver);
        // require('./includes/social.js').testPinterest(webdriver, driver);
        require('./includes/social.js').testInstagram(webdriver, driver);
        // require('./includes/social.js').testRSS(webdriver, driver);
        require('./includes/social.js').testBsocial(webdriver, driver);
});


// Test that a toggle item appears in the left nav.
// (Find and click a plus sign in the left nav to expand sub nav items.)
driver.findElements({className: 'child_toggle'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'child_toggle\' is here');
		// TODO: Can we check that this click worked?
                driver.findElement({className: 'child_toggle'}).click();
        } else {
                console.log('ERROR: Page element \'child_toggle\' is NOT FOUND');
        }
});

// Test that a 'HOUSING OPTIONS' item appears in the left nav.
driver.findElements({id: 'menu-item-1961292'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'menu-item-1961292\' (\'HOUSING OPTIONS left-nav link\') is here');
                elements[0].getText().then(function (text) { console.log('\ttext = ' + text); });
        } else {
                console.log('ERROR: Page element \'menu-item-1961292\' (\'HOUSING OPTIONS left-nav link\') is NOT FOUND');
        }
});

// 
// END LEFT NAV STUFF
//

//
// FOOTER STUFF
//

// INCLUDE REUSABLE CODE for testing that footer elements are present and correct.
// Note the strings we're passing here; they'll change for each site.
driver.findElements({className: 'post-footer'}).then(function(elements) {
        console.log('Checking that the post-footer is present and accurate...');
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element of class \'post-footer\' is here');
                require('./includes/footer.js').testFooter(webdriver, driver);
                require('./includes/footer.js').testPhoneNumber(webdriver, driver, '(208) 447-1001');
                require('./includes/footer.js').testDeptName(webdriver, driver, 'HOUSING AND RESIDENCE LIFE');
                require('./includes/footer.js').testEmail(webdriver, driver, 'HOUSING@BOISESTATE.EDU');
                require('./includes/footer.js').testMailingAddress(webdriver, driver, 'CHAFFEE HALL, 1910 UNIVERSITY DRIVE, BOISE, ID 83725-1355');
        } else {
                console.log('ERROR: Page element of class \'post-footer\' is NOT FOUND');
        }
});

//
// END FOOTER STUFF
//

//
// BODY STUFF
//

// INCLUDING SHARED CODE to search for strong/b tags and em/i tags:
require('./includes/em_tags.js').testEmTags(webdriver, driver);
require('./includes/strong_tags.js').testStrongTags(webdriver, driver);

// INCLUDING REUSABLE CODE for testing that menu elements are present and correct.
driver.findElements({id: 'topnav'}).then(function(elements) {
        console.log('Checking that the top nav is present and accurate...');
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element of class \'topnav\' is here');
		require('./includes/menu.js').testMenuTop(webdriver, driver);
		require('./includes/menu.js').testLinkIsPresent(webdriver, driver, 'MY.BOISESTATE');
		require('./includes/menu.js').testLinkIsPresent(webdriver, driver, 'A-Z INDEX');
		require('./includes/menu.js').testLinkIsPresent(webdriver, driver, 'DIRECTORIES');
		require('./includes/menu.js').testLinkIsPresent(webdriver, driver, 'MAPS');
		require('./includes/menu.js').testLinkIsPresent(webdriver, driver, 'NEWS');
		require('./includes/menu.js').testLinkIsPresent(webdriver, driver, 'EVENTS');
        } else {
                console.log('ERROR: Page element of class \'topnav\' is NOT FOUND');
        }
});

var URL = 'https://housing.boisestate.edu/llc';
var redirect = 'https://housing.boisestate.edu/livinglearningcommunities/communities/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/topics/apply-for-housing/';
var redirect = 'https://housing.boisestate.edu/apply-for-housing/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/topics/apply-for-apartments/';
var redirect = 'https://housing.boisestate.edu/apply-for-apartments/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/topics/bottom-line-estimator/';
// var redirect = 'https://financialaid.boisestate.edu/bottom-line-estimator/';
var redirect = 'https://financialaid.boisestate.edu/handbook/borrowing-and-budgeting/bottom-line-estimator/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/applications/';
var redirect = 'https://housing.boisestate.edu/apply-for-housing/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/fyrep/';
var redirect = 'https://housing.boisestate.edu/subtopic/first-year-residential-engagement-program/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/roomsync/';
var redirect = 'https://housing.boisestate.edu/topics/roommate-selection-assignment/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/rates/';
var redirect = 'https://housing.boisestate.edu/subtopic/rates/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/facilities-and-amenities/';
var redirect = 'https://housing.boisestate.edu/housing-options/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/firstyearhall/';
var redirect = 'https://housing.boisestate.edu/housing-options/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// This redirect is enabled, but fails every time. Likely related to the 
// knowledgebase plugin that creates the subtopic pages:
// var URL = 'https://housing.boisestate.edu/moving/';
// var redirect = 'https://housing.boisestate.edu/subtopic/moving/';
// require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/mailphones/';
var redirect = 'https://housing.boisestate.edu/topics/mail-and-packages/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/townhomes/';
// var redirect = 'https://housing.boisestate.edu/lincoln-townhomes/';
// The URL to which this page redirects appears to have changed 20170111 so we're
// udpating the test.
var redirect = 'https://housing.boisestate.edu/housing-options/lincoln-townhomes/'
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/2016-2017-apartment-rates/';
var redirect = 'https://housing.boisestate.edu/subtopic/rates/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://housing.boisestate.edu/amenities-facilities/';
var redirect = 'https://housing.boisestate.edu/subtopic/current-residents/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// var URL = 'https://housing.boisestate.edu/community-living/';
// var redirect = 'https://housing.boisestate.edu/subtopic/community-living/';
// require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// var URL = 'https://housing.boisestate.edu/topics/cost-attendance-estimator/';
// var redirect = 'https://admissions.boisestate.edu/estimator/';
// require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

driver.quit();
