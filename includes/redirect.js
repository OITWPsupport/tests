module.exports.testRedirect = function (webdriver, driver, redirectFrom, redirectTo) {
	driver.get(redirectFrom)
		.then(function() {
			console.log('Testing redirection of ' + redirectFrom);
	        })
        	.then(function() {
                	return driver.getCurrentUrl()
	        })
        	.then(function(currentUrl){
			// Usually, http requests will get fowarded to https.
			// Let's ignore the start of the URL string and test the remainder
			if (currentUrl.indexOf('https://') == 0) {
				var currentUrlSubstring = currentUrl.slice(8);
			} else if (currentUrl.indexOf('http://') == 0) {
				var currentUrlSubstring = currentUrl.slice(7);
			}
			// Let's also ignore the 'www' that may or may not 
			// appear at the start of the URL:
                        if (currentUrlSubstring.indexOf('www.') == 0) {
                                var currentUrlSubstring = currentUrlSubstring.slice(4);
                        }

                        if (redirectTo.indexOf('https://') == 0) {
                                var redirectToSubstring = redirectTo.slice(8);
                        } else if (redirectTo.indexOf('http://') == 0) {
                                var redirectToSubstring = redirectTo.slice(7);
                        }
                        if (redirectToSubstring.indexOf('www.') == 0) {
                                var redirectToSubstring = redirectToSubstring.slice(4);
                        }

                	console.log('\tRedirects to ' + currentUrl);
			if (currentUrlSubstring == redirectToSubstring) {
				console.log('\tRedirect OK!');
			} else {
				console.log('\tERROR redirecting ' + redirectFrom + ':');
				console.log('\tShould redirect to ' + redirectTo);
				console.log('\tBut instead we\'ve arrived at ' + currentUrl);
				// console.log('currentUrlSubstring = ' + currentUrlSubstring);
				// console.log('redirectToSubstring = ' + redirectToSubstring);
			}
	        });
};

