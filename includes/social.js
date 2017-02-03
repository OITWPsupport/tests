module.exports.testTwitter = function (webdriver, driver) {

// Test that the Twitter icon appears in the left nav
driver.findElements({className: 'social-icon-twitter_clr'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('\tTwitter icon (social-icon-twitter_clr) found. OK!');
        } else {
                console.log('\tERROR: Page element social-icon-twitter_clr is NOT FOUND');
        }
});

};


module.exports.testFacebook = function (webdriver, driver) {

// Test that the Facebook icon appears in the left nav
driver.findElements({className: 'social-icon-facebook_clr'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
		console.log('\tFacebook icon (social-icon-facebook_clr) found. OK!');
        } else {
                console.log('\tERROR: Page element social-icon-facebook_clr is NOT FOUND');
        }
});

};


module.exports.testRSS = function (webdriver, driver) {

// Test that the RSS icon appears in the left nav
driver.findElements({className: 'social-icon-rss_clr'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
		console.log('\tRSS icon (social-icon-rss_clr) found. OK!');
        } else {
                console.log('\tERROR: Page element social-icon-rss_clr is NOT FOUND');
        }
});
};


module.exports.testBsocial = function (webdriver, driver) {
// Test that the Bsocial icon appears in the left nav
driver.findElements({className: 'social-icon-bsocial_clr'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
		console.log('\tBsocial icon (social-icon-bsocial_clr) found. OK!');
        } else {
                console.log('\tERROR: Page element social-icon-bsocial_clr is NOT FOUND');
        }      
});
};

module.exports.testPinterest = function (webdriver, driver) {
// Test that the Pinterest icon appears in the left nav
driver.findElements({className: 'social-icon-pinterest_clr'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('\tPinterest icon (social-icon-pinterest_clr) found. OK!');
        } else {
                console.log('\tERROR: Page element social-icon-pinterest_clr is NOT FOUND');
        }
});
};

module.exports.testInstagram = function (webdriver, driver) {
// Test that the Instagram icon appears in the left nav
driver.findElements({className: 'social-icon-instagram_clr'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('\tInstagram icon (social-icon-instagram_clr) found. OK!');
        } else {
                console.log('\tERROR: Page element social-icon-instagram_clr is NOT FOUND');
        }
});
};

module.exports.testYoutube = function (webdriver, driver) {
// Test that the Youtube icon appears in the left nav
driver.findElements({className: 'social-icon-youtube_clr'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('\tYoutube icon (social-icon-youtube_clr) found. OK!');
        } else {
                console.log('\tERROR: Page element social-icon-youtube_clr is NOT FOUND');
        }
});
};

module.exports.testSoundcloud = function (webdriver, driver) {
// Test that the Soundcloud icon appears in the left nav
driver.findElements({className: 'social-icon-soundcloud_clr'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('\tYoutube icon (social-icon-soundcloud_clr) found. OK!');
        } else {
                console.log('\tERROR: Page element social-icon-soundcloud_clr is NOT FOUND');
        }
});
};
