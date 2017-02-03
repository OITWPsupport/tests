// 
// TEST CONFIGURATION
// 

// Set the URL of the page to test:
var URL = 'https://focus.boisestate.edu';

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('firefox').build();
require('./includes/driver.js').setURL(webdriver, driver, URL);
const until = webdriver.until;

//
// HEADER STUFF 
//

        driver.findElements({tagName: 'title'}).then(function(elements) {
                var pageHasLoaded = elements.length;
                if (pageHasLoaded){
                        console.log('Page has a title tag.');
                }
        });

        // Find the title of the page and display it in the output
        driver.getTitle().then(function(title) {
                console.log('Page element \'title\' is here');
		if (title == 'FOCUS') {
	                console.log('\tTitle is correct: ' + title);
		} else {
			console.log('\tERROR: Title is INCORRECT: ' + title);
			console.log('\t(Should read \'FOCUS\')');
		}
        });




//
// END HEADER STUFF
//

// 
// LEFT NAV STUFF
//

// Test that a copyright message appears at the bottom of the left nav.
driver.findElements({className: 'copyright--line'}).then(function(elements) {
	console.log('Checking that the copyright message is present...');
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'copyright--line\' is here');
                elements[0].getText().then(function (text) { console.log('\ttext = ' + text); });
        } else {
                console.log('ERROR: Page element \'copyright--line\' is NOT FOUND');
        }
});

// 
// END LEFT NAV STUFF
//

//
// FOOTER STUFF
//


//
// END FOOTER STUFF
//

//
// BODY STUFF
//

// INCLUDING SHARED CODE to search for strong/b tags and em/i tags:
require('./includes/em_tags.js').testEmTags(webdriver, driver);
require('./includes/strong_tags.js').testStrongTags(webdriver, driver);

driver.findElements({className: 'copyright--line'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'copyright--line\' is here');
		elements[0].getText().then(function (text) {
			console.log('\tCopyright line 1 reads: ' + text);
		});
		elements[1].getText().then(function (text) {
                        console.log('\tCopyright line 2 reads: ' + text);
                });
        } else {
                console.log('ERROR: Page element \'copyright--line\' is NOT FOUND');
        }
});


driver.quit();
