//
// TEST CONFIGURATION
//

// Set the URL of the page to test:
var URL = 'https://registrar.boisestate.edu';

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

// Test that the left nav has a CALENDARS & DEADLINES link, and that it's of the proper class
driver.findElements({id: 'menu-item-6912'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element of ID \'menu-item-6912\' (the CALENDARS & DEADLINES link) is here');
        } else {
                console.log('ERROR: Page element of class \'menu-item-6912\' (the CALENDARS & DEADLINES link) is NOT FOUND');
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

// Test that a 'CATALOGS' item appears in the left nav.
driver.findElements({id: 'menu-item-55752'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'menu-item-55752\' (\'CATALOGS left-nav link\')) is here');
                elements[0].getText().then(function (text) { console.log('\ttext = ' + text); });
        } else {
                console.log('ERROR: Page element \'menu-item-55752\' (\'CATALOGS left-nav link\')) is NOT FOUND');
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

// There should be one H1 on the page class=entry-title. Display its text:
var element = driver.findElement({ className: 'entry-title' });
element.getText().then(function (text) { 
	console.log('entry-title = ' + text); 
	if (text == 'OFFICE OF THE REGISTRAR') {
		console.log('\tText is correct: ' + text);
	} else {
		console.log('ERROR: Page element \'entry-title\' text is incorrect.\n\tReads: ' + text + ' but should read OFFICE OF THE REGISTRAR');
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

var URL = 'http://registrar.boisestate.edu/senior-permit';
var redirect = 'https://registrar.boisestate.edu/wp-content/uploads/2016/10/Senior-Permit.pdf';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://registrar.boisestate.edu/payment';
var redirect = 'https://secure.touchnet.com/C20444_ustores/web/store_main.jsp?STOREID=38&SINGLESTORE=true';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://registrar.boisestate.edu/wp-content/uploads/2015/06/catalog-year-update.pdf';
var redirect = 'https://registrar.boisestate.edu/wp-content/uploads/2015/10/Catalog-Year-Update.pdf';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://registrar.boisestate.edu/wp-content/uploads/2013/06/residency.pdf';
var redirect = 'https://registrar.boisestate.edu/wp-content/uploads/2015/08/Residency-Determination-Worksheet-10-21-2013-2.pdf';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://registrar.boisestate.edu/wp-content/uploads/2013/11/Senior_Permit.pdf';
var redirect = 'https://registrar.boisestate.edu/wp-content/uploads/2016/10/Senior-Permit.pdf';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://registrar.boisestate.edu/graduation/graduation-honors/';
var redirect = 'https://registrar.boisestate.edu/graduation/diplomashonors/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://registrar.boisestate.edu/graduation/diplomas/';
var redirect = 'https://registrar.boisestate.edu/graduation/diplomashonors/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://registrar.boisestate.edu/graduation/degree-verification/';
var redirect = 'https://registrar.boisestate.edu/registration/enrollment-verification/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://registrar.boisestate.edu/graduation/graduation-application/';
var redirect = 'https://registrar.boisestate.edu/graduation/process/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://registrar.boisestate.edu/graduation/graduation-checklists-2/';
var redirect = 'https://registrar.boisestate.edu/graduation/process/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);

var URL = 'https://registrar.boisestate.edu/graduation/degree-clearance/';
var redirect = 'https://registrar.boisestate.edu/graduation/process/';
require('./includes/redirect.js').testRedirect(webdriver, driver, URL, redirect);


driver.quit();
