module.exports.testHeader = function (webdriver, driver) {

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

	// There should be one link class=nav_home. It appears as an icon, part of the
	// breadcrumb navigation
	driver.findElements({className: 'nav_home'}).then(function(elements) {
        	var isPresent = elements.length;
        	if (isPresent){
                	console.log('Page element nav_home is here');
        	} else {
                	console.log('ERROR: Page element nav_home is NOT FOUND');
        	}
	});

};
