#!/bin/bash

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
done < /Users/davidlentz/Desktop/temp.csv
