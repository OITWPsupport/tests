module.exports.testSearch = function (webdriver, driver) {
	// Test that the search field is present in the header.
	driver.findElement({id: 'woocommerce-product-search-field-0'}).then(
		function(element) {
                	console.log('Page element \'woocommerce-product-search-field-0\' (the search field) is here');
		},
		function(err) {
			if (err.name === "NoSuchElementError") {
				console.log('ERROR: Page element \'woocommerce-product-search-field-0\' (the search field) is NOT FOUND');
			}
		});
};
