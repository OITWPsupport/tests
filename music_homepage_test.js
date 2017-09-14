// 
// TEST CONFIGURATION
// 

// Set the URL of the page to test:
var URL = 'https://music.boisestate.edu';

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
	console.log('Checking the left nav for social icons / links...');
	require('./includes/social.js').testTwitter(webdriver, driver);
	require('./includes/social.js').testFacebook(webdriver, driver);
	//require('./includes/social.js').testYoutube(webdriver, driver);
	//require('./includes/social.js').testPinterest(webdriver, driver);
	require('./includes/social.js').testInstagram(webdriver, driver);
	// require('./includes/social.js').testRSS(webdriver, driver);
	// require('./includes/social.js').testBsocial(webdriver, driver);
	require('./includes/social.js').testSoundcloud(webdriver, driver);
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

// Test that a 'CALENDAR AND EVENTS' item appears in the left nav.
driver.findElements({id: 'menu-item-189591'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'menu-item-189591\' (\'CALENDAR AND EVENTS left-nav link\')) is here');
                elements[0].getText().then(function (text) { console.log('\ttext = ' + text); });
        } else {
                console.log('ERROR: Page element \'menu-item-189591\' (\'CALENDAR AND EVENTS left-nav link\')) is NOT FOUND');
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
		require('./includes/footer.js').testPhoneNumber(webdriver, driver, '(208) 426-1596');
		require('./includes/footer.js').testDeptName(webdriver, driver, 'DEPARTMENT OF MUSIC');
		require('./includes/footer.js').testEmail(webdriver, driver, 'MUSIC@BOISESTATE.EDU');
		require('./includes/footer.js').testMailingAddress(webdriver, driver, 'MORRISON CENTER C100');
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
	                if (text == 'WELCOME TO THE BOISE STATE UNIVERSITY DEPARTMENT OF MUSIC') {
       	                	 console.log('\tText is correct: ' + text);
                	} else {
                        	console.log('\tERROR: Text is INCORRECT: ' + text);
				console.log('\t(Should read \'WELCOME TO THE BOISE STATE UNIVERSITY DEPARTMENT OF MUSIC\')');
                	}
		});
        } else {
                console.log('ERROR: Page element \'entry-title\' is NOT FOUND');
        }
});

// Confirm that the department RSS feed is visible:
driver.findElements({className: 'dept-rss'}).then(function(elements) {
        console.log('Checking that the dept-rss is present...');
        var isPresent = elements.length;
        if (isPresent){
                console.log('\tRSS feed found. OK!');
	} else {
		console.log('\tERROR: RSS feed is missing.');
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

// driver.sleep(1500);
var URL = 'https://music.boisestate.edu/boise-chamber-music-series/';
var redirect = 'http://boisechambermusicseries.org/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

//driver.sleep(1500);
var URL = 'https://music.boisestate.edu/boise-jazz-society-2/';
var redirect = 'http://www.boisestate.edu/music/BJS/index.html';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

# This redirect fails because geneharris.org no longer exits.
# We'll update Redirection to point instead to https://geneharris.boisestate.edu/
#var URL = 'https://music.boisestate.edu/gene-harris-jazz-festival/';
#var redirect = 'http://www.geneharris.org/';
#require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);
var URL = 'https://music.boisestate.edu/gene-harris-jazz-festival/';
var redirect = 'https://geneharris.boisestate.edu/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://music.boisestate.edu/blog/featured/les-bois-chamber-winds/';
var redirect = 'https://music.boisestate.edu/wp-content/blogs.dir/1/files/2015/11/Chamber-Winds-poster-3.pdf';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://music.boisestate.edu/blog/featured/19th-annual-gene-harris-jazz-festival/';
var redirect = 'https://www.facebook.com/events/838085819642042/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

driver.quit();
