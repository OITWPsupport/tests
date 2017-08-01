//
// TEST CONFIGURATION
//

// Set the URL of the page to test:
var URL = 'https://admissions.boisestate.edu';

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

// Test that the left nav has a GET STARTED link, and that it has the proper id
driver.findElements({id: 'menu-item-15551'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element of ID \'menu-item-15551\' (the GET STARTED link) is here');
        } else {
                console.log('ERROR: Page element of class \'menu-item-15551\' (the GET STARTED link) is NOT FOUND');
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
        require('./includes/social.js').testPinterest(webdriver, driver);
        require('./includes/social.js').testInstagram(webdriver, driver);
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

// Test that a 'MAJOR FINDER' item appears in the left nav.
driver.findElements({id: 'menu-item-111682'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'menu-item-111682\' (\'MAJOR FINDER left-nav link\') is here');
                elements[0].getText().then(function (text) { console.log('\ttext = ' + text); });
        } else {
                console.log('ERROR: Page element \'menu-item-111682\' (\'MAJOR FINDER left-nav link\') is NOT FOUND');
        }
});

// 
// END LEFT NAV STUFF
//

//
// FOOTER STUFF
//

driver.findElements({className: 'post-footer'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'post-footer\' is here');
		elements[0].getText().then(function (text) { 
			var errorsInFooter=0;
/*
                        if(text.indexOf('Office of the Registrar') == -1) {
                                console.log('\tERROR: Office of the Registrar name is missing from footer');
				errorsInFooter++;
                        }
                        if(text.indexOf('regmail@boisestate.edu') == -1) {
                                console.log('\tERROR: email address is missing from footer');
				errorsInFooter++;
                        }
                        if(text.indexOf('Administration Building') == -1) {
                                console.log('\tERROR: mailing address is missing from footer');
				errorsInFooter++;
			}
*/
			if(errorsInFooter==0){
				console.log('\t...looks good!');
			}
		});
        } else {
                console.log('ERROR: Page element \'post-footer\' is NOT FOUND');
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

var URL = 'http://admissions.boisestate.edu/sat';
var redirect = 'https://collegereadiness.collegeboard.org/sat/scores/understanding-scores/sat-score-converter';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://admissions.boisestate.edu/major-finder/';
var redirect = 'https://majors.boisestate.edu/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// var URL = 'https://admissions.boisestate.edu/vip';
// var redirect = 'https://boisestate.askadmissions.net/vip/';
// require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// This tests the functionality to forward requests for an attachment page
// and instead serve up its parent page. Was the result of Attachment Pages
// Redirect plugin, but that's disallowed. Sites can still use the same feature
// within Yoast SEO:
var URL = 'https://admissions.boisestate.edu/bronco-ambassadors/jordy/';
var redirect = 'https://admissions.boisestate.edu/bronco-ambassadors/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

driver.quit();
