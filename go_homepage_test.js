//
// TEST CONFIGURATION
//

// Set the URL of the page to test:
var URL = 'https://go.boisestate.edu';

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

// INCLUDING SHARED CODE for testing "Mega Menu" elements:
require('./includes/megamenu.js').testMegamenu(webdriver, driver);

// INCLUDING SHARED CODE for testing that social icons/links appear in the left nav:
driver.findElements({className: 'localnav'}).then(function(elements) {
        console.log('Checking the left nav for social icons / links...');
        require('./includes/social.js').testTwitter(webdriver, driver);
        require('./includes/social.js').testFacebook(webdriver, driver);
        require('./includes/social.js').testYoutube(webdriver, driver);
        require('./includes/social.js').testPinterest(webdriver, driver);
        require('./includes/social.js').testInstagram(webdriver, driver);
        // require('./includes/social.js').testRSS(webdriver, driver);
        // require('./includes/social.js').testBsocial(webdriver, driver);
});


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
                require('./includes/footer.js').testPhoneNumber(webdriver, driver, '(208) 426-1000');
                require('./includes/footer.js').testDeptName(webdriver, driver, 'BOISE STATE UNIVERSITY');
               	require('./includes/footer.js').testEmail(webdriver, driver, 'COMMUNICATIONS@BOISESTATE.EDU');
                require('./includes/footer.js').testMailingAddress(webdriver, driver, '1910 UNIVERSITY DRIVE');
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
                        if (text == 'GO.BOISESTATE.EDU') {
                                 console.log('\tText is correct: ' + text);
                        } else {
                                console.log('\tERROR: Text is INCORRECT: ' + text);
                                console.log('\t(Should read \'GO.BOISESTATE.EDU\'');
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

// This tests the functionality to forward requests for an attachment page
// and instead serve up its parent page. Was the result of Attachment Pages
// Redirect plugin, but that's disallowed. Sites can still use the same feature
// within Yoast SEO:
var URL = 'https://go.boisestate.edu/join-our-team/welcometoboisestate_twitter/';
var redirect = 'https://go.boisestate.edu/join-our-team/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

driver.quit();
