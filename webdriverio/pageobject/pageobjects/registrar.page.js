var page = require('./page');

var registrarPage = Object.create(page, {
    /**
     * define elements
     */
	footerDiv: { get: function () { return $('#content > div.post-footer > p'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'https://registrar.boisestate.edu/');
    } }

});

module.exports = registrarPage;
