//
// TEST CONFIGURATION
//

// Set the URL of the page to test:
var URL = 'https://sps.boisestate.edu';

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

// Test that the left nav has a MISSION|VISION|VALUES link, and that it has the proper id
driver.findElements({id: 'menu-item-23582'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element of ID \'menu-item-23582\' (the MISSION|VISION|VALUES link) is here');
        } else {
                console.log('ERROR: Page element of class \'menu-item-23582\' (the MISSION|VISION|VALUES link) is NOT FOUND');
        }
});

// INCLUDING SHARED CODE for testing "Mega Menu" elements:
require('./includes/megamenu.js').testMegamenu(webdriver, driver);

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

// Test that a 'CENTERS & INSTITUTES' item appears in the left nav.
driver.findElements({id: 'menu-item-9692'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'menu-item-9692\' (\'CENTERS & INSTITUTES left-nav link\') is here');
                elements[0].getText().then(function (text) { console.log('\ttext = ' + text); });
        } else {
                console.log('ERROR: Page element \'menu-item-9692\' (\'CENTERS & INSTITUTES left-nav link\') is NOT FOUND');
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
                require('./includes/footer.js').testPhoneNumber(webdriver, driver, '(208) 426-1368');
                require('./includes/footer.js').testDeptName(webdriver, driver, 'SCHOOL OF PUBLIC SERVICE');
                require('./includes/footer.js').testEmail(webdriver, driver, 'SCHOOLOFPUBLICSERVICE@BOISESTATE.EDU');
                require('./includes/footer.js').testMailingAddress(webdriver, driver, 'EDUCATION BUILDING 7TH FLOOR');
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

// There should be one H1 on the page class=entry-title. Display its text:
driver.findElements({className: 'entry-title'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'entry-title\' is here');
                elements[0].getText().then(function (text) {
                        if (text == 'SCHOOL OF PUBLIC SERVICE') {
                                 console.log('\tText is correct: ' + text);
                        } else {
                                console.log('\tERROR: Text is INCORRECT: ' + text);
                                console.log('\t(Should read \'SCHOOL OF PUBLIC SERVICE\'');
                        }
                });
        } else {
                console.log('ERROR: Page element \'entry-title\' is NOT FOUND');
        }
});

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

var URL = 'https://sps.boisestate.edu/idaho/';
var redirect = 'https://sps.boisestate.edu/cihp/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

driver.quit();
