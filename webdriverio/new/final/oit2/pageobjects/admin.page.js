var Page = require('./page')

var AdminPage = Object.create(Page, {
	user_login: { get: function () { return browser.element('#user_login'); } }, 
	user_pass: { get: function () { return browser.element('#user_pass'); } }

    open: { value: function() {
        Page.open.call(this, 'admin');
    } },
    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = AdminPage;
