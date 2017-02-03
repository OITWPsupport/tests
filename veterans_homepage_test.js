// 
// TEST CONFIGURATION
// 

// Set the URL of the page to test:
var URL = 'https://veterans.boisestate.edu';

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

// Test that a 'VETERAN SERVICES' item appears in the left nav.
driver.findElements({id: 'menu-item-15621'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'menu-item-15621\' (\'VETERAN SERVICES left-nav link\')) is here');
                elements[0].getText().then(function (text) { console.log('\ttext = ' + text); });
        } else {
                console.log('ERROR: Page element \'menu-item-15621\' (\'VETERAN SERVICES left-nav link\')) is NOT FOUND');
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
		require('./includes/footer.js').testPhoneNumber(webdriver, driver, '(208) 426.3744');
		require('./includes/footer.js').testDeptName(webdriver, driver, 'VETERAN SERVICES CENTER');
		require('./includes/footer.js').testEmail(webdriver, driver, ' VETERANSERVICES@BOISESTATE.EDU');
		require('./includes/footer.js').testMailingAddress(webdriver, driver, '1910 UNIVERSITY DRIVE BOISE ID 83725-1390');
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
	                if (text == 'VETERAN SERVICES') {
       	                	 console.log('\tText is correct: ' + text);
                	} else {
                        	console.log('\tERROR: Text is INCORRECT: ' + text);
				console.log('\t(Should read \'VETERAN SERVICES\')');
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

//
// Testing redirects
// 

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2011/11/10/bsu-named-military-friendly-school-2012/';
var redirect = 'http://www.militaryfriendlyschools.com/search/profile.aspx?id=142115&year=2012';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2011/11/11/military-members-vets-focus-of-activities-on-bsu-campus/';
var redirect = 'http://news.boisestate.edu/update/2011/11/10/military-members-vets-focus-of-activities-on-boise-state-campus/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2011/11/11/service-learning-students-partner-with-wyakin-warroirs/';
var redirect = 'http://news.boisestate.edu/update/2011/11/10/service-learning-students-partner-with-wyakin-warriors/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2012/01/23/photo-of-the-week-11-11-11/';
var redirect = 'http://news.boisestate.edu/update/2011/11/11/photo-of-the-week-%E2%80%94-nov-11/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2012/01/23/2011-veterans-day-ceremony-slideshow/';
var redirect = 'http://boisestate.edu/media/2011_veterans_day/index.html';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2012/01/23/war-hero-turned-bronco-awarded-purple-heart/';
var redirect = 'http://news.boisestate.edu/update/2011/09/08/war-hero-turned-bronco-awarded-purple-heart/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2012/01/23/new-gi-bill/';
var redirect = 'http://newgibill.org/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2012/01/26/veteran-services-spring-2012-update-2/';
var redirect = 'https://veterans.boisestate.edu/wp-content/uploads/2012/01/news_letter-spr-121.pdf';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2012/02/07/two-campus-events-address-issues-facing-veterans/';
var redirect = 'http://news.boisestate.edu/update/2012/02/06/two-campus-events-address-issues-facing-veterans/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2012/04/20/boise-state-recognized-for-support-of-guard-reserve-employees/';
var redirect = 'http://news.boisestate.edu/update/2012/04/19/boise-state-recognized-for-support-of-guard-reserve-employees/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2012/06/21/six-disabled-vets-to-be-inducted-as-newest-wyakin-warriors/';
var redirect = 'http://news.boisestate.edu/update/2012/06/20/six-disabled-vets-to-be-inducted-as-newest-wyakin-warriors/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2012/07/16/2012-all-veterans-welcome-home/';
var redirect = 'http://www.boise.va.gov/2012_All_Veterans_Welcome_Home.asp';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

// driver.sleep(1500);
var URL = 'https://veterans.boisestate.edu/blog/2012/08/06/veterans-affairs-secretary-shinseki-meets-on-campus-with-boise-state-student-veterans/';
var redirect = 'http://news.boisestate.edu/update/2012/08/03/veterans-affairs-secretary-shinseki-meets-on-campus-with-boise-state-student-veterans/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

driver.quit();
