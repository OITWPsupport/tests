var assert = require('assert');
describe('webdriver.io page', function() {
	it('Times the page load', function () {
		var startTimestamp = new Date().getTime();
		browser.url('http://107.170.248.57/sleeptest.php');
		var endTimestamp = new Date().getTime();
		console.log('Took ' + (endTimestamp-startTimestamp) + ' ms to load the page.');
	});

});
