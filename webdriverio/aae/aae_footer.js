// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('webdriver.io page', function() {
        it('Should have a post-footer element with the right text', function () {
                browser.url('https://aae.boisestate.edu');

		isExisting = browser.isExisting('#someRandomNonExistingElement');
		console.log(isExisting); // outputs: false

                var post_footer = browser.isExisting('.post-footerZZZ');
		console.log(post_footer);
                assert(post_footer, 'There is no post-footer element on this page.');

                var post_footer_text = browser.getText(".post-footer p");
		assert.isString(post_footer_text.toString(), 'THAT IS NOT A STRING!');
		assert.isObject(post_footer_text, 'NOT AN object');
		// expect(post_footer_text).to.include('ADVISING AND ACADEMIC ENHANCEMENT');
		console.log("post_footer_text = ");
		console.log(post_footer_text.toString());
        });
});
