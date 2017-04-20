//
// TEST CONFIGURATION
//

// Set the URL of the page to test:
var URL = 'https://test.boisestate.edu/simple-calendar-test/';

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('firefox').build();
require('./includes/driver.js').setURL(webdriver, driver, URL);
const until = webdriver.until;

        // Test that a title tag even exists. We'll use this as an indication
        // that the page loaded successfully (by testing for the presence
        // of the 'Page has a title tag' string later).
        driver.findElements({tagName: 'title'}).then(function(elements) {
                var pageHasLoaded = elements.length;
                if (pageHasLoaded){
                        console.log('Page has a title tag.');
                }
        });

// Find the title of the page and display it in the output
driver.getTitle().then(function(title) {
	console.log('Page element \'title\' is here');
	console.log('\ttext = ' + title);
});


driver.findElements({className: 'simcal-date-format'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'simcal-date-format\' is here');
        } else {
                console.log('ERROR: Page element \'simcal-date-format\' is NOT FOUND');
        }
});

driver.findElements({className: 'simcal-icon-right'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'simcal-icon-right\' is here');
        } else {
                console.log('ERROR: Page element \'simcal-icon-right\' is NOT FOUND');
        }
});

driver.findElements({className: 'simcal-events-list-container'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'simcal-events-list-container\' is here');
        } else {
                console.log('ERROR: Page element \'simcal-events-list-container\' is NOT FOUND');
        }
});

driver.findElements({className: 'simcal-day-label'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'simcal-day-label\' is here');
        } else {
                console.log('ERROR: Page element \'simcal-day-label\' is NOT FOUND');
        }
});

driver.findElements({className: 'simcal-event-start'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'simcal-event-start\' is here');
        } else {
                console.log('ERROR: Page element \'simcal-event-start\' is NOT FOUND');
        }
});

driver.findElements({className: 'simcal-event-start-date'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'simcal-event-start-date\' is here');
        } else {
                console.log('ERROR: Page element \'simcal-event-start-date\' is NOT FOUND');
        }
});

// There's a div tag of class simcal-ajax-loader
driver.findElements({className: 'simcal-ajax-loader'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'simcal-ajax-loader\' is here');
        } else {
                console.log('ERROR: Page element \'simcal-ajax-loader\' is NOT FOUND');
        }
});


// There's an em tag whose classes are simcal-icon-spinner and simcal-icon-spin
// The plugin actually creates this as an I tag, and the Boise State Accessibility plugin
// converts to em
driver.findElements({className: 'simcal-icon-spinner'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'simcal-icon-spinner\' is here');
        } else {
                console.log('ERROR: Page element \'simcal-icon-spinner\' is NOT FOUND');
        }
});

driver.findElements({className: 'simcal-icon-spin'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'simcal-icon-spin\' is here');
        } else {
                console.log('ERROR: Page element \'simcal-icon-spin\' is NOT FOUND');
        }
});


require('./includes/em_tags.js').testEmTags(webdriver, driver);
require('./includes/strong_tags.js').testStrongTags(webdriver, driver);

driver.quit();
