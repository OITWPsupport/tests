var assert = require('chai').assert;
var expect = require('chai').expect;

describe('webdriver.io page', function() {
        it('Should have a post-footer element with the right text', function () {
		var theURL = 'https://english.boisestate.edu/';
		browser.url(theURL);

                var post_footer = browser.isExisting('.post-footer');
                assert(post_footer, 'There is no post-footer element on this page.');

                var post_footer_text = browser.getText(".post-footer p");
                assert.isString(post_footer_text.toString(), 'post_footer_text IS NOT A STRING!');
                expect(post_footer_text).to.include(process.env.FOOTERSTRING, 'ERROR: problem with the footer');
		console.log("OK! footer looks good");
        });
});

