//
// TEST CONFIGURATION
//

// Set the URL of the page to test:
var URL = 'https://cobe.boisestate.edu';

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

// Test that the left nav has a COBE HOME link, and that it has the proper id
driver.findElements({id: 'menu-item-8241'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element of ID \'menu-item-8241\' (the COBE HOME link) is here');
        } else {
                console.log('ERROR: Page element of class \'menu-item-8241\' (the COBE HOME link) is NOT FOUND');
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
        // require('./includes/social.js').testInstagram(webdriver, driver);
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
                require('./includes/footer.js').testPhoneNumber(webdriver, driver, '(208) 426-1125');
                require('./includes/footer.js').testDeptName(webdriver, driver, 'COLLEGE OF BUSINESS AND ECONOMICS');
                require('./includes/footer.js').testEmail(webdriver, driver, 'COBE-INFO@BOISESTATE.EDU');
                require('./includes/footer.js').testMailingAddress(webdriver, driver, 'MICRON BUSINESS AND ECONOMICS BUILDING ROOM 3131');
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

var URL = 'https://cobe.boisestate.edu/econscholarship/';
var redirect = 'https://cobe.boisestate.edu/economics/student-resources/scholarships/len-b-and-grace-jordan-scholarship/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://cobe.boisestate.edu/bridge2career/';
var redirect = 'https://cobe.boisestate.edu/studentadvising/business-minor-certificate-program/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://cobe.boisestate.edu/global-scholars/';
var redirect = 'https://cobe.boisestate.edu/internationalbusiness/global-scholars-program-info/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://cobe.boisestate.edu/sustainabilityreport/';
var redirect = 'https://cobe.boisestate.edu/rbi/sustainability-report/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

driver.quit();
