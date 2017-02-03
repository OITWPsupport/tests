module.exports.setURL = function (webdriver, driver, URL) {
	driver.get(URL);
	URL_log = console.log('Testing ' + URL);
};
