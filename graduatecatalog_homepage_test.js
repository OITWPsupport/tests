//
// TEST CONFIGURATION
//

// Set the URL of the page to test:
var URL = 'https://graduatecatalog.boisestate.edu';

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

// Test that the left nav has a GRADUATE DEGREES AND CERTIFICATES link, and that it's of the proper class
driver.findElements({id: 'menu-item-28972'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element of ID \'menu-item-28972\' (the GRADUATE DEGREES AND CERTIFICATES link) is here');
        } else {
                console.log('ERROR: Page element of class \'menu-item-28972\' (the GRADUATE DEGREES AND CERTIFICATES link) is NOT FOUND');
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
});

// Test that a 'GRADUATE COURSE OFFERINGS' item appears in the left nav: 
driver.findElements({id: 'menu-item-28982'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'menu-item-28982\' (\'GRADUATE COURSE OFFERINGS\' left-nav link) is here');
                elements[0].getText().then(function (text) { console.log('\ttext = ' + text); });
        } else {
                console.log('ERROR: Page element \'menu-item-28982\' (\'GRADUATE COURSE OFFERINGS\' left-nav link) is NOT FOUND');
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
                require('./includes/footer.js').testPhoneNumber(webdriver, driver, ' (208) 426-3903');
                require('./includes/footer.js').testDeptName(webdriver, driver, 'GRADUATE COLLEGE');
                require('./includes/footer.js').testEmail(webdriver, driver, 'GRADCOLL@BOISESTATE.EDU');
                require('./includes/footer.js').testMailingAddress(webdriver, driver, 'RIVERFRONT HALL, ROOM 307');
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
var element = driver.findElement({ className: 'entry-title' });
element.getText().then(function (text) { 
	console.log('entry-title = ' + text); 
	if (text == 'GRADUATE CATALOG') {
		console.log('\tText is correct: ' + text);
	} else {
		console.log('ERROR: Page element \'entry-title\' text is incorrect.\n\tReads: ' + text + ' but should read GRADUATE CATALOG');
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

driver.quit();