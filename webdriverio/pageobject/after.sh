#!/bin/bash
#
# This script creates the webguide test files that test the pages of the site after
# the accessibility subsite is exported and brought into the root site.
# It reads data from data/temp.csv, which is data formatted specifically for these
# scripts. (See also before.sh.) The source for temp.csv is an export file from the
# Export All URLs plugin on the webguide/accessibility subsite. That file is in the format
#
# Title,URL
# e.g. About Siteimprove,https://webguide.boisestate.edu/about-siteimprove/,
#
# It was processed with the following command to fix titles, create filenames, and
# determine the "before" and "after" URLs:
# sed -E 's/^(.*),https:\/\/(.*).boisestate.edu\/([a-zA-Z0-9-]*)\/(.*),$/"\1 - Web Accessibility",https:\/\/\2.boisestate.edu\/\3\/\4,https:\/\/\2.boisestate.edu\/\4/' data/Exported_Data.CSV | sed -E 's/boisestate.edu\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)\/(([a-zA-Z0-9-]+)\/,)*$/boisestate.edu\/\1-\2\/\3/' | sed -E 's/^(.*)\/([A-Z0-9a-z-]*)\/,$/\1\/\2\/,\2/' | sed -E 's/^(.*)\/([A-Z0-9a-z-]*)\/$/\1\/\2\/,\2/'

while IFS=, read title beforeurl afterurl filename
do
	echo "var expect = require('chai').expect;" > specs/webguide/after/tempfile
	echo "var ThisPage = require('../../../pageobjects/webguide.page');" >> specs/webguide/after/tempfile
	echo "" >> specs/webguide/after/tempfile
	echo "//" >> specs/webguide/after/tempfile
	echo "// These are the page-specific values to change for each new test" >> specs/webguide/after/tempfile
	echo "//" >> specs/webguide/after/tempfile
	echo "var testURL = '${afterurl}';" >> specs/webguide/after/tempfile
	echo "var title = '${title}';" >> specs/webguide/after/tempfile
	echo "var header = '';" >> specs/webguide/after/tempfile

	cat specs/webguide/after/template >> specs/webguide/after/tempfile
	mv specs/webguide/after/tempfile specs/webguide/after/${filename}.spec.js
done < data/temp.csv
