var assert = require('chai').assert;
var expect = require('chai').expect;

describe('webdriver.io page', function() {
        it('Should have one link class=nav_home (an icon in the breadcrumb nav)', function () {
                var theURL = 'https://english.boisestate.edu/';
                browser.url(theURL);

                var nav_home = browser.isExisting('#breadcrumb_wrap .nav_home');
                assert(nav_home, 'There is no nav_home element on this page.');

                var nav_home_link = browser.getAttribute('#breadcrumb_wrap .nav_home', 'href');
                expect(nav_home_link).to.include('//www.boisestate.edu', 'ERROR: problem with the nav_home link');
                console.log("OK! nav_home looks good");
        });
});
