//
// TEST CONFIGURATION
//

// Set the URL of the page to test:
var URL = 'https://search.boisestate.edu';

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('firefox').build();
require('./includes/driver.js').setURL(webdriver, driver, URL);
const until = webdriver.until;

//
// HEADER STUFF
//

// INCLUDING SHARED CODE for testing header and search elements:
require('./includes/header.js').testHeader(webdriver, driver);

// Test that the search field is present in the header.
driver.findElements({id: 'gsc-i-id1'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'gsc-i-id1\' (the search field) is here');
        } else {
                console.log('ERROR: Page element \'gsc-i-id1\' (the search field) is NOT FOUND');
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
                require('./includes/footer.js').testPhoneNumber(webdriver, driver, '(208)426-1000');
                require('./includes/footer.js').testDeptName(webdriver, driver, 'COMMUNICATIONS AND MARKETING');
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


// Test that the search field is present in the header.
driver.findElements({id: 'gsc-i-id1'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'gsc-i-id1\' (the search field) is here');
		driver.findElement({id: 'gsc-i-id1' }).clear();
                driver.findElement({id: 'gsc-i-id1' }).sendKeys('test search from OIT');
                driver.findElement({id: 'gsc-i-id1' }).sendKeys(webdriver.Key.ENTER);
/*
                driver.findElements({id: 'resInfo-0'}).then(function(elements) {
                        var searchResults = elements.length;
                        if (searchResults){
                                console.log('Page element \'resInfo-0\' (search results) is here');
                                elements[0].getText().then(function (text) { console.log('\ttext = ' + text); });
                      } else {  
                                console.log('ERROR: Page element \'resInfo-0\' (search results) is NOT FOUND');
                      }
                      
                      // driver.sleep(4000);
                        driver.navigate().back();
                });
*/

                const until = webdriver.until;
                driver.wait(until.elementLocated({id: 'resInfo-0'}), 4500);

                driver.findElement({id: 'resInfo-0'}).then(
                	function(element) {
                        	console.log('\tPage element \'resInfo-0\' (search results) is here');
                                element.getText().then(function (text) { console.log('\ttext = ' + text); });
                        },

                        function (err) {
                        	if (err.name === "NoSuchElementError") {
                                	console.log('\tERROR: Search failed. Page element \'resInfo-0\' (search results) is NOT FOUND');
                        	}
               		});


        } else {
                console.log('ERROR: Page element \'gsc-i-id1\' (the search field) is NOT FOUND');
        }
});

driver.quit();
