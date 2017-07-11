var assert = require('chai').assert;
var expect = require('chai').expect;
var paramslocal = require('./paramslocal.js');

describe('webdriver.io page', function() {
        it('Should have one link class=nav_home (an icon in the breadcrumb nav)', function () {
                var theURL = paramslocal.theURL;
                browser.url(theURL);

                var nav_home = browser.isExisting('#breadcrumb_wrap .nav_home');
                assert(nav_home, theURL + ': There is no nav_home element');

                var nav_home_link = browser.getAttribute('#breadcrumb_wrap .nav_home', 'href');
                expect(nav_home_link).to.include('//www.boisestate.edu', theURL + ' ERROR: problem with the nav_home link');
                // console.log(theURL + ': OK! nav_home looks good.');
        });
});
