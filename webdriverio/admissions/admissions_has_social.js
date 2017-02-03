var assert = require('assert');

describe('webdriver.io page', function() {
        it('Should have social media icons.', function () {
                browser.url('https://admission.boisestate.edu');
                // Now reload. If the emergency alert overlay is up,
                // this will make it go away:
                // browser.reload();
		// browser.pause(3000);

                var has_social_twitter = browser.isExisting('img[class="social-icon social-icon-twitter_clr"]');
                assert(has_social_twitter);

                var has_social_facebook = browser.isExisting('img[class="social-icon social-icon-facebook_clr"]');
                assert(has_social_facebook);

                var has_social_rss = browser.isExisting('img[class="social-icon social-icon-rss_clr"]');
                // assert(has_social_rss);

                var has_social_bsocial = browser.isExisting('img[class="social-icon social-icon-bsocial_clr"]');
                // assert(has_social_bsocial);

                var has_social_pinterest = browser.isExisting('img[class="social-icon social-icon-pinterest_clr"]');
                assert(has_social_pinterest);

                var has_social_instagram = browser.isExisting('img[class="social-icon social-icon-instagram_clr fl"]');
                assert(has_social_instagram);

                var has_social_youtube = browser.isExisting('img[class="social-icon social-icon-youtube_clr"]');
                assert(has_social_youtube);

                var has_social_soundcloud = browser.isExisting('img[class="social-icon social-icon-soundcloud_clr"]');
                // assert(has_social_soundcloud);
        });
});
