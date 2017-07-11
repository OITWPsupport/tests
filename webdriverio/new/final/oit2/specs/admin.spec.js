var assert = require('chai').assert;
var expect = require('chai').expect;
var AdminPage = require('../pageobjects/admin.page');

describe('WP Admin screen', function() {
        it('should have a login form', function () {
                AdminPage.open();
                assert(AdminPage.user_login, 'There is no username field (#user_login).');
                assert(AdminPage.user_pass, 'There is no username field (#user_pass).');
        });
});
