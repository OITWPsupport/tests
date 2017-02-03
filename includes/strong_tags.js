module.exports.testStrongTags = function (webdriver, driver) {

	driver.findElements({tagName: 'strong'}).then(function(elements) {
        	var hasStrongTags = elements.length;
        	if (hasStrongTags){
                	console.log('Page has at least one STRONG tag.');
        	} else {
                	console.log('NOTICE: Page has zero STRONG tags.');
        	}
	});

	driver.findElements({tagName: 'b'}).then(function(elements) {
        	var hasEmTags = elements.length;
        	if (hasEmTags){
                	console.log('ERROR: Page has at least one B tag.');
        	} else {
                	console.log('Page has zero B tags.');
        	}
	});

};
