module.exports.testToggle = function (webdriver, driver) {

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
};
