var assert = require('chai').assert;
var expect = require('chai').expect;
var paramslocal = require('./paramslocal.js');

describe('webdriver.io page', function() {
        it('Should have a breadcrumb labeled 404', function () {
                var the404URL = paramslocal.theURL + 'nonexistentpage';
                browser.url(the404URL);

                var breadcrumbText = browser.getText('//*[@id="breadcrumb_wrap"]/ul[1]');
		expect(breadcrumbText).to.include(' / 404', the404URL + ': There should be a HOME / 404 string');
        });
});
