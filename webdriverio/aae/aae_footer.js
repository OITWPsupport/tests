var assert = require('chai').assert;
var expect = require('chai').expect;

describe('webdriver.io page', function() {
        it('Should have a post-footer element with the right text', function () {
                browser.url('https://aae.boisestate.edu');

                var post_footer = browser.isExisting('.post-footer');
                assert(post_footer, 'There is no post-footer element on this page.');

                var post_footer_text = browser.getText(".post-footer p");
		assert.isString(post_footer_text.toString(), 'post_footer_text IS NOT A STRING!');
		expect(post_footer_text).to.include('ADVISING AND ACADEMIC SUPPORT CENTER');

		var left_nav = browser.isExisting('#menu-item-71');
		assert(left_nav, 'There is no left-nav element on this page.');

		var left_nav_text = browser.getText("#menu-item-71");
		assert.isString(left_nav_text.toString(), 'left_nav_text IS NOT A STRING!');
                expect(left_nav_text).to.include('HOME');
        });
});
