module.exports.testMenuTop = function (webdriver, driver) {
        driver.findElements({className: 'menu-top'}).then(function(elements) {
                return elements.length;
});
};


module.exports.testLinkIsPresent = function (webdriver, driver, linkText) {
        driver.findElements({className: 'menu-top'}).then(function(elements) {
                var isPresent = elements.length;
                if (isPresent){
                        elements[0].getText().then(function (text) {
                                if(text.indexOf(linkText) == -1) {
                                        console.log('\tERROR: ' + linkText + ' link is missing from menu');
                                 //       return false;
                                } else {
					console.log('\t' + linkText + ' link found in menu. OK!');
				}

                        });
                }
        });
};

