#!/bin/bash
#
# This script creates the webguide test files that test the pages of the site after
# the accessibility subsite is exported and brought into the root site.
# It reads data from data/temp.csv, which is data formatted specifically for these
# scripts. (See also after.sh.) The source for temp.csv is an export file from the
# Export All URLs plugin on the webguide/accessibility subsite. That file is in the format
#
# Title,URL
# e.g. "About Siteimprove",https://webguide.boisestate.edu/about-siteimprove/,
#
# It was processed with the following command to fix titles, create filenames, and determine the
# "before" and "after" URLs:
# sed -E 's/https:\/\/(.*).boisestate.edu(.*)/https:\/\/\1.boisestate.edu\2https:\/\/www.boisestate.edu\/\1\2/' data/Exported_Data.CSV | sed -E 's/^"(.*)",/\1 - Boise State Webguide,/' | sed -E 's/^(.*)\/([a-z-]*)\/,$/\1\/\2\/,\2/' > data/temp.csv

while IFS=, read title beforeurl afterurl filename
do
	echo "var expect = require('chai').expect;" > specs/webguide/before/tempfile
	echo "var ThisPage = require('../../../pageobjects/webguide.page');" >> specs/webguide/before/tempfile
	echo "" >> specs/webguide/before/tempfile
	echo "//" >> specs/webguide/before/tempfile
	echo "// These are the page-specific values to change for each new test" >> specs/webguide/before/tempfile
	echo "//" >> specs/webguide/before/tempfile
	echo "var testURL = '${beforeurl}';" >> specs/webguide/before/tempfile
	echo "var title = '${title}';" >> specs/webguide/before/tempfile
	echo "var header = '';" >> specs/webguide/before/tempfile

	cat specs/webguide/before/template >> specs/webguide/before/tempfile
	mv specs/webguide/before/tempfile specs/webguide/before/${filename}.spec.js
done < data/temp.csv
