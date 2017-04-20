// 
// TEST CONFIGURATION
// 

// Set the URL of the page to test:
var URL = 'https://secureforms.boisestate.edu/ecampus/ref-letter-imaging-sciences/';

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

//
// END HEADER STUFF
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
		require('./includes/footer.js').testPhoneNumber(webdriver, driver, '(208) 426-1709');
		require('./includes/footer.js').testDeptName(webdriver, driver, 'ECAMPUS CENTER');
		require('./includes/footer.js').testEmail(webdriver, driver, 'ECAMPUS@BOISESTATE.EDU');
		require('./includes/footer.js').testMailingAddress(webdriver, driver, '220 E. PARKCENTER BLVD.  BOISE, ID  83706-3940');
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
	                if (text == 'REFERENCE LETTER FOR BOISE STATE BACHELOR OF SCIENCE, IMAGING SCIENCES') {
       	                	 console.log('\tText is correct: ' + text);
                	} else {
                        	console.log('\tERROR: Text is INCORRECT: ' + text);
				console.log('\t(Should read \'REFERENCE LETTER FOR BOISE STATE BACHELOR OF SCIENCE, IMAGING SCIENCES\')');
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

// TEST THAT THE GRAVITY FORMS WCAG PLUGIN STYLES ARE BEING CORRECTED.
// We use the Scripts & Styles plugin to override a class this plugin 
// creates which draws an unwanted dropshadow around radio button groups.
driver.findElement( {className: 'gfieldset'}).getCssValue("box-shadow").then(function(boxShadow) {
	console.log('Testing Gravity Forms WCAG plugin styles.');
        console.log('\tbox-shadow class = ' + boxShadow);
	if(boxShadow.indexOf('0px 0px 0px 0px') == -1) {
		console.log('\tERROR: We\'re not properly overriding the styles in the Gravity Forms WCAG plugin.');
	} else {
		console.log('\tOK!');
	}
});

driver.quit();
