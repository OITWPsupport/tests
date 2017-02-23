var assert = require('assert');
describe('webdriver.io page', function() {
	it.only('Should have the right title.', function () {
		var dt1 = new Date();
		var startTimestamp = dt1.getTime();
		// console.log(process.env.TESTUSER);
		browser.url('https://aae.boisestate.edu');
		var title = browser.getTitle();
		assert.equal(title, 'Advising and Academic Enhancement - Advising and Academic Enhancement');
		var dt2 = new Date();
		var endTimestamp = dt2.getTime();
		var elapsed = (endTimestamp-startTimestamp);
		console.log('Took ' + elapsed + ' ms to load the page.');
	});

	it('should have an icon link of class=nav_home', function() {
		browser.url('https://aae.boisestate.edu');
		var has_nav_home = browser.isExisting('a[class="nav_home"]');
		assert(has_nav_home);
	});

	it('should have a search field', function() {
		browser.url('https://aae.boisestate.edu');
		var has_search_field = browser.isExisting('#q');
		assert(has_search_field);
	});

	it('should search', function() {
		browser.url('https://housing.boisestate.edu');
		browser.setValue('#q','test search from OIT');
		browser.click('#searchsubmit');
		browser.pause(1500);
		var search_results_element = browser.isExisting('#resInfo-0');
		assert(search_results_element);
		browser.back();
		browser.pause(1000);
		var search_all_radio = browser.isExisting('.all_s');
		assert(search_all_radio);
                var search_this_radio = browser.isExisting('.this_s');
                assert(search_this_radio);

		var search_all_text = browser.getText("[for='google']"); 
		var search_this_text = browser.getText("[for='section']");

		assert.equal(search_all_text, 'SEARCH ALL BOISE STATE');
		assert.equal(search_this_text, 'SEARCH THIS SECTION');

		var mega_menu = browser.isExisting('#fw-mega-menu');
		assert(mega_menu);
	
		var mega_about_text = browser.getText("#fw-mega-menu #about a span");
		assert.equal(mega_about_text, 'ABOUT');

                var mega_about_text = browser.getText("#fw-mega-menu #admissions a span");
                assert.equal(mega_about_text, 'ADMISSIONS');

                var mega_about_text = browser.getText("#fw-mega-menu #academics a span");
                assert.equal(mega_about_text, 'ACADEMICS');

                var mega_about_text = browser.getText("#fw-mega-menu #research a span");
                assert.equal(mega_about_text, 'RESEARCH');

                var mega_about_text = browser.getText("#fw-mega-menu #administration a span");
                assert.equal(mega_about_text, 'ADMINISTRATION');

                var mega_about_text = browser.getText("#fw-mega-menu #giving a span");
                assert.equal(mega_about_text, 'GIVING');

                var mega_about_text = browser.getText("#fw-mega-menu #alumni a span");
                assert.equal(mega_about_text, 'ALUMNI');
                var has_social_twitter = browser.isExisting('img[class="social-icon social-icon-twitter_clr"]');
                assert(has_social_twitter);

		var has_social_facebook = browser.isExisting('img[class="social-icon social-icon-facebook_clr"]');
		assert(has_social_facebook);

		var has_social_rss = browser.isExisting('img[class="social-icon social-icon-rss_clr"]');
		// assert(has_social_rss);

		var has_social_bsocial = browser.isExisting('img[class="social-icon social-icon-bsocial_clr"]');
		assert(has_social_bsocial);

		var has_social_pinterest = browser.isExisting('img[class="social-icon social-icon-pinterest_clr"]');
		// assert(has_social_pinterest);

		var has_social_instagram = browser.isExisting('img[class="social-icon social-icon-instagram_clr fl"]');
		assert(has_social_instagram);

		var has_social_youtube = browser.isExisting('img[class="social-icon social-icon-youtube_clr"]');
		assert(has_social_youtube);

		var has_social_soundcloud = browser.isExisting('img[class="social-icon social-icon-soundcloud_clr"]');
		// assert(has_social_soundcloud);
	});
});
