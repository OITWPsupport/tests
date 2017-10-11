// 
// TEST CONFIGURATION
// 

// Set the URL of the page to test:
var URL = 'https://dev-radarcart.boisestate.edu/library/product-category/addiction/';

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('firefox').build();
require('./includes/driver.js').setURL(webdriver, driver, URL);
const until = webdriver.until;

//
// HEADER STUFF 
//

// INCLUDING SHARED CODE for testing header and search elements:
require('./includes/woocommerce_header.js').testHeader(webdriver, driver);
require('./includes/woocommerce_search.js').testSearch(webdriver, driver);

//
// FOOTER STUFF
//

// INCLUDE REUSABLE CODE for testing that footer elements are present and correct.
// Note the strings we're passing here; they'll change for each site.
driver.findElements({className: 'site-footer'}).then(function(elements) {
	console.log('Checking that the site-footer is present and accurate...');
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element of class \'site-footer\' is here');
		require('./includes/woocommerce_footer.js').testFooter(webdriver, driver);
		require('./includes/woocommerce_footer.js').testCopyright(webdriver, driver, 'RADAR Center Library 2017');
		require('./includes/woocommerce_footer.js').testStorefrontCredit(webdriver, driver, 'Storefront designed by');
        } else {
                console.log('ERROR: Page element of class \'site-footer\' is NOT FOUND');
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

// There should be one H1 on the page class=woocommerce-products-header__title page-title. Display its text:
driver.findElements({className: 'woocommerce-products-header__title page-title'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'woocommerce-products-header__title page-title\' is here');
		elements[0].getText().then(function (text) {
       	                console.log('\tPage title text: ' + text);
		});
        } else {
                console.log('ERROR: Page element \'woocommerce-products-header__title page-title\' is NOT FOUND');
        }
});

driver.findElements({id: 'woocommerce_product_categories-2'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'woocommerce_product_categories-2\' (\'Product Categories\' list) is here');
			var productCategories = [
				"Alcohol", 
				"Bullying", 
				"Drug Education", 
				"Marijuana",
				"Tobacco", 
				"Parenting", 
				"Suicide", 
				"Depression" 
];
			elements[0].getText().then(function (text) {
			for (var i=0; i < productCategories.length; i++) {
                                if(text.indexOf(productCategories[i]) == -1) {
                                        console.log('\tERROR: \'' + productCategories[i] + '\' is missing from the Product Categories list.');
                                } else {
                                        console.log('\tFound \'' + productCategories[i] + '\' on the Product Categories list OK!');
                                }
			}
			});



        } else {
                console.log('ERROR: Page element \'woocommerce_product_categories-2\' is NOT FOUND');
        }
});


driver.quit();
