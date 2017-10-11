module.exports.testFooter = function (webdriver, driver) {
	driver.findElements({className: 'site-footer'}).then(function(elements) {
        	return elements.length;
});


};

module.exports.testCopyright = function (webdriver, driver, copyrightString) {
	driver.findElements({className: 'site-footer'}).then(function(elements) {
        	var isPresent = elements.length;
        	if (isPresent){
                	elements[0].getText().then(function (text) {
                        	if(text.indexOf(copyrightString) == -1) {
                                	console.log('\tERROR: copyright string is missing or incorrect');
                        	} else {
					console.log('\tCopyright string (\'' + copyrightString + '\') OK!');
				}
			});
		}
	});


};


module.exports.testStorefrontCredit = function (webdriver, driver, storefrontCreditString) {
        driver.findElements({className: 'site-footer'}).then(function(elements) {
                var isPresent = elements.length;
                if (isPresent){
                        elements[0].getText().then(function (text) {
                                if(text.indexOf(storefrontCreditString) == -1) {
                                        console.log('\tERROR: Storefront credit string is missing or incorrect');
                                } else {
                                        console.log('\tStorefront credit in the footer (\'' + storefrontCreditString + '\') OK!');
                                }
                        });
                }
});


};
