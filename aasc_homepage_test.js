// 
// TEST CONFIGURATION
// 

// Set the URL of the page to test:
var URL = 'https://aasc.boisestate.edu';

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('firefox').build();
// var driver = new webdriver.Builder().forBrowser('chrome').build();
require('./includes/driver.js').setURL(webdriver, driver, URL);
const until = webdriver.until;

//
// HEADER STUFF 
//

// INCLUDING SHARED CODE for testing header and search elements:
require('./includes/header.js').testHeader(webdriver, driver);
require('./includes/search.js').testSearch(webdriver, driver);

// Test that there's a HOME link, and that it's of the proper class
// (This is just the breadcrumb / home icon above the H1 on all WP sites.)
driver.findElements({className: 'nav_home'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element of class \'nav_home\' (the HOME link/icon) is here');
        } else {
                console.log('ERROR: Page element of class \'nav_home\' (the HOME link/icon) is NOT FOUND');
        }
});

// INCLUDING SHARED CODE for testing "Mega Menu" elements:
require('./includes/megamenu.js').testMegamenu(webdriver, driver);

//
// END HEADER STUFF
//

// 
// LEFT NAV STUFF
//

// INCLUDING SHARED CODE for testing that social icons/links appear in the left nav:
driver.findElements({className: 'localnav'}).then(function(elements) {
	// console.log('Checking the left nav for social icons / links...');
	// require('./includes/social.js').testTwitter(webdriver, driver);
	// require('./includes/social.js').testFacebook(webdriver, driver);
	// require('./includes/social.js').testYoutube(webdriver, driver);
	// require('./includes/social.js').testPinterest(webdriver, driver);
	// require('./includes/social.js').testInstagram(webdriver, driver);
	// require('./includes/social.js').testRSS(webdriver, driver);
	// require('./includes/social.js').testBsocial(webdriver, driver);
	// require('./includes/social.js').testSoundcloud(webdriver, driver);
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
		require('./includes/footer.js').testPhoneNumber(webdriver, driver, '(208) 426-4049');
		require('./includes/footer.js').testDeptName(webdriver, driver, 'ADVISING AND ACADEMIC SUPPORT CENTER');
		require('./includes/footer.js').testEmail(webdriver, driver, 'ACADEMIC@BOISESTATE.EDU');
		require('./includes/footer.js').testMailingAddress(webdriver, driver, 'SMASH BUILDING, FIRST FLOOR');
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

driver.quit();
