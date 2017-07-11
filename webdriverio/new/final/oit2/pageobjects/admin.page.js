var page = require('./page')

var adminPage = Object.create(page, {
	user_login: { get: function () { return browser.element('#user_login'); } }, 
	user_pass: { get: function () { return browser.element('#user_pass'); } }

    open: { value: function() {
        Page.open.call(this, 'wp-admin');
    } }
});

module.exports = adminPage;
