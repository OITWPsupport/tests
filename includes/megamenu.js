module.exports.testMegamenu = function (webdriver, driver) {
// Test that the mega menu exists and contains the proper links:
// ABOUT, ADMISSIONS, ACADEMICS, RESEARCH, ADMINISTRATION, GIVING AND ALUMNI
// ("bottomnav" is at the bottom of the header (not in the footer))
driver.findElements({id: 'fw-mega-menu'}).then(function(elements) {
        var isPresent = elements.length;
        if (isPresent){
                console.log('Page element \'fw-mega-menu\' is here');
                elements[0].getText().then(function (text) {
                                // console.log(text);
                        var errorsInMegaMenu=0;
                        if(text.indexOf('ABOUT') == -1) {
                                console.log('\tERROR: ABOUT is missing from MegaMenu');
                                errorsInMegaMenu++;
                        } else {
				console.log('\tABOUT appears in MegaMenu. OK!');
			}
                        if(text.indexOf('ADMISSIONS') == -1) {
                                console.log('\tERROR: ADMISSIONS is missing from MegaMenu');
                                errorsInMegaMenu++;
                        } else {
                                console.log('\tADMISSIONS appears in MegaMenu. OK!');
                        }
                        if(text.indexOf('ACADEMICS') == -1) {
                                console.log('\tERROR: ACADEMICS is missing from MegaMenu');
                                errorsInMegaMenu++;
                        } else {
                                console.log('\tACADEMICS appears in MegaMenu. OK!');
                        }
                        if(text.indexOf('RESEARCH') == -1) {
                                console.log('\tERROR: RESEARCH is missing from MegaMenu');
                                errorsInMegaMenu++;
                        } else {
                                console.log('\tRESEARCH appears in MegaMenu. OK!');
                        }
                        if(text.indexOf('ADMINISTRATION') == -1) {
                                console.log('\tERROR: ADMINISTRATION is missing from MegaMenu');
                                errorsInMegaMenu++;
                        } else {
                                console.log('\tADMINISTRATION appears in MegaMenu. OK!');
                        }
                        if(text.indexOf('GIVING') == -1) {
                                console.log('\tERROR: GIVING is missing from MegaMenu');
                                errorsInMegaMenu++;
                        } else {
                                console.log('\tGIVING appears in MegaMenu. OK!');
                        }
                        if(text.indexOf('ALUMNI') == -1) {
                                console.log('\tERROR: ALUMNI is missing from MegaMenu');
                                errorsInMegaMenu++;
                        } else {
                                console.log('\tALUMNI appears in MegaMenu. OK!');
                        }

                        if(errorsInMegaMenu==0){
                                console.log('\tMegaMenu looks good!');
                        }
                });
        } else {
                console.log('ERROR: Page element \'fw-mega-menu\' is NOT FOUND');
        }
});

};
