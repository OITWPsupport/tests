module.exports.testSearch = function (webdriver, driver) {
	// Test that the search field is present in the header.
	driver.findElement({id: 'q'}).then(
		function(element) {
                	console.log('Page element \'q\' (the search field) is here');
                        // On 20170420, this started causing errors in all tests.
                        // We're unable to test search until we debug this

			console.log('\tSubmitting search term \'test search from OIT\'...');
			var searchField = driver.findElement({id: 'q'});
			// searchField.clear();
			var keys = ['t','e','s','t'];
			searchField.keys("test");
/*
			const until = webdriver.until;

			// Wait a few seconds, then see if the search results div is present:
			driver.wait(until.elementLocated({id: 'resInfo-0'}), 6000).then(
				function (element) {
					console.log('\tPage element \'resInfo-0\' (search results) is here'); 
				}, 
				function (err) {
					console.log('\tERROR: Search failed. Page element \'resInfo-0\' (search results) is NOT FOUND');
				});

driver.sleep(2500);
			console.log('\tBacking up to the previous page.');
        	       	driver.navigate().back();
			driver.sleep(2500);
*/

		},
		function(err) {
			if (err.name === "NoSuchElementError") {
				console.log('ERROR: Page element \'q\' (the search field) is NOT FOUND');
			}
		});

// Test that the radio button to SEARCH ALL BOISE STATE is present in the header.
driver.findElements({className: 'all_s'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'all_s\' (search radio for \'search all boise state\') is here');
                driver.findElement({className: 'all_s'}).click();
        } else {
                console.log('ERROR: Page element \'all_s\' (search radio for \'search all boise state\') is NOT FOUND');
        }
});


// Test that the radio button to SEARCH THIS SECTION is present in the header.
driver.findElements({className: 'this_s'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'this_s\' (search radio for \'search this section\') is here');
                driver.findElement({className: 'this_s'}).click();
        } else {
                console.log('ERROR: Page element \'this_s\' (search radio for \'search this section\') is NOT FOUND');
        }
});


// Test that the SEARCH ALL BOISE STATE radio button is labeled correctly.
// Test that the SEARCH THIS SECTION radio button is labeled correctly.
var search_toggle = driver.findElement({id: 'search_toggle'});
search_toggle.findElements({className: 'label'}).then(function(elements) {
        elements[0].getText().then(function (text) {
                console.log('Checking the text on the \'search all boise state\' radio button...');
                if (text == 'SEARCH ALL BOISE STATE') {
                        console.log('\tText is correct: ' + text);
                } else {
                        console.log('\tERROR: Text is INCORRECT: ' + text);
                }
        });
        elements[1].getText().then(function (text) {
                                console.log('Checking the text on the \'search this section\' radio button...');
                if (text == 'SEARCH THIS SECTION') {
                        console.log('\tText is correct: ' + text);
                } else {
                        console.log('\tERROR: Text is INCORRECT: ' + text);
                }
        });
});
};
