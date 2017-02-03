module.exports.testEmTags = function (webdriver, driver) {


	driver.findElements({tagName: 'em'}).then(function(elements) {
        	var hasEmTags = elements.length;
        	if (hasEmTags){
                	console.log('Page has at least one EM tag.');
        	} else {
                	console.log('NOTICE: Page has zero EM tags.');
        	}
	});

	driver.findElements({tagName: 'i'}).then(function(elements) {
        	var hasEmTags = elements.length;
        	if (hasEmTags){
                	console.log('ERROR: Page has at least one I tag.');
        	} else {
                	console.log('Page has zero I tags.');
        	}
	});

};
