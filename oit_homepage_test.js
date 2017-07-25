// 
// TEST CONFIGURATION
// 

// Set the URL of the page to test:
var URL = 'https://oit.boisestate.edu';

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
driver.findElements({className: 'menu-item-home'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element of class \'menu-item-home\' (the left-nav HOME link) is here');
        } else {
                console.log('ERROR: Page element of class \'menu-item-home\' (the left-nav HOME link) is NOT FOUND');
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
	console.log('Checking the left nav for social icons / links...');
	require('./includes/social.js').testTwitter(webdriver, driver);
	require('./includes/social.js').testFacebook(webdriver, driver);
	//require('./includes/social.js').testYoutube(webdriver, driver);
	//require('./includes/social.js').testPinterest(webdriver, driver);
	//require('./includes/social.js').testInstagram(webdriver, driver);
	require('./includes/social.js').testRSS(webdriver, driver);
	require('./includes/social.js').testBsocial(webdriver, driver);
});

// INCLUDING SHARED CODE for testing header and search elements:
require('./includes/toggle.js').testToggle(webdriver, driver);

/*
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
*/
// Test that a 'NEWS @ OIT' item appears in the left nav.
driver.findElements({id: 'menu-item-30941'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'menu-item-30941\' (\'NEWS @ OIT left-nav link\')) is here');
                elements[0].getText().then(function (text) { console.log('\ttext = ' + text); });
        } else {
                console.log('ERROR: Page element \'menu-item-30941\' (\'NEWS @ OIT left-nav link\')) is NOT FOUND');
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
		require('./includes/footer.js').testPhoneNumber(webdriver, driver, '(208) 426-4357');
		require('./includes/footer.js').testDeptName(webdriver, driver, 'OFFICE OF INFORMATION TECHNOLOGY');
		require('./includes/footer.js').testEmail(webdriver, driver, 'HELPDESK@BOISESTATE.EDU');
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
	                if (text == 'WELCOME TO THE OFFICE OF INFORMATION TECHNOLOGY') {
       	                	 console.log('\tText is correct: ' + text);
                	} else {
                        	console.log('\tERROR: Text is INCORRECT: ' + text);
				console.log('\t(Should read \'WELCOME TO THE OFFICE OF INFORMATION TECHNOLOGY\'');
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

var URL = 'https://oit.boisestate.edu/aar/';
var redirect = 'https://oit.boisestate.edu/myboisestate/files/2013/07/Advisor-AAR-Access.pdf';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/accessibility/';
var redirect = 'https://webguide.boisestate.edu/accessibility/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/broncobytes/';
var redirect = 'https://oit.boisestate.edu/news/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/broncoprint/';
var redirect = 'https://oit.boisestate.edu/printing/broncoprint/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// var URL = 'https://oit.boisestate.edu/chat/';
// var redirect = 'http://rc.boisestate.edu/api/start_session.ns?issue_menu=1&id=1&c2cjs=1';
// require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/conferencerooms/';
var redirect = 'https://oit.boisestate.edu/hardware/conference-room-support-services/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/grade-my-classes/';
var redirect = 'https://oit.boisestate.edu/myboisestate/files/2013/07/Grade-My-Classes.pdf';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/office/';
var redirect = 'https://oit.boisestate.edu/software/microsoft-office/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/business/';
var redirect = 'https://oit.boisestate.edu/aboutoit/departments/oitbusiness/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/permissions/';
var redirect = 'https://oit.boisestate.edu/myboisestate/files/2013/07/View-My-Permission-Numbers.pdf';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/phishing/';
var redirect = 'https://oit.boisestate.edu/email/gmail-at-boise-state-university/phishing-and-spam-email-messages/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/printservices/';
var redirect = 'https://oit.boisestate.edu/printing/department-print-services/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/wireless/';
var redirect = 'https://oit.boisestate.edu/network/wireless-access/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

//
// Subsite redirects
// The following are in effect as of 20161214, via Quick Redirects.
// 
//

var URL = 'https://oit.boisestate.edu/email/forwarding/';
var redirect = 'https://oit.boisestate.edu/email/gmail-at-boise-state-university/email-forwarding-at-boise-state-university/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/projects/homepage/';
var redirect = 'https://oit.boisestate.edu/pmo/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/projects/';
var redirect = 'https://oit.boisestate.edu/pmo/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/labs/';
var redirect = 'https://oit.boisestate.edu/publiccomputing/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/research/hpc-accounts-and-access/';
var redirect = 'https://rcs.boisestate.edu/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/research/';
var redirect = 'https://rcs.boisestate.edu/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/research/privatecloud/free-servers-research/';
var redirect = 'https://rcs.boisestate.edu/high-performance-computing/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/research/privatecloud/free-storage-research/';
var redirect = 'https://rcs.boisestate.edu/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://oit.boisestate.edu/research/high-performance-computing/';
var redirect = 'https://rcs.boisestate.edu/high-performance-computing/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

driver.quit();
