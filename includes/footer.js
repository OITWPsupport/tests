module.exports.testFooter = function (webdriver, driver) {
	driver.findElements({className: 'post-footer'}).then(function(elements) {
        	return elements.length;
});


};

module.exports.testDeptName = function (webdriver, driver, deptName) {
	driver.findElements({className: 'post-footer'}).then(function(elements) {
        	var isPresent = elements.length;
        	if (isPresent){
                	elements[0].getText().then(function (text) {
                        	if(text.indexOf(deptName) == -1) {
                                	console.log('\tERROR: department name is missing or incorrect');
                        	} else {
					console.log('\tDepartment name (\'' + deptName + '\') OK!');
				}
			});
		}
	});


};


module.exports.testPhoneNumber = function (webdriver, driver, phoneNumber) {
        driver.findElements({className: 'post-footer'}).then(function(elements) {
                var isPresent = elements.length;
                if (isPresent){
                        elements[0].getText().then(function (text) {
                                if(text.indexOf(phoneNumber) == -1) {
                                        console.log('\tERROR: department phone number is missing or incorrect');
                                } else {
                                        console.log('\tPhone number (\'' + phoneNumber + '\') OK!');
                                }
                        });
                }
});


};


module.exports.testEmail = function (webdriver, driver, emailAddress) {
        driver.findElements({className: 'post-footer'}).then(function(elements) {
                var isPresent = elements.length;
                if (isPresent){
                        elements[0].getText().then(function (text) {
                                if(text.indexOf(emailAddress) == -1) {
                                        console.log('\tERROR: department email address is missing or incorrect');
                                } else {
                                        console.log('\tEmail address (\'' + emailAddress + '\') OK!');
                                }
                        });
                }
});


};

module.exports.testMailingAddress = function (webdriver, driver, mailingAddress) {
        driver.findElements({className: 'post-footer'}).then(function(elements) {
                var isPresent = elements.length;
                if (isPresent){
                        elements[0].getText().then(function (text) {
                                if(text.indexOf(mailingAddress) == -1) {
                                        console.log('\tERROR: department mailing address is missing or incorrect');
                                } else {
                                        console.log('\tMailing address (\'' + mailingAddress + '\') OK!');
                                }
                        });
                }
});

};

