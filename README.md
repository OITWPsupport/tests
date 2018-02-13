# tests

## Deprecated. 
Instead, see https://github.com/OITWPsupport/page-object-tests

This repository contains Selenium Webdriver tests created and maintained by OIT's WP Support team. Each tests runs against a single page, 
and aims to confirm the presence and correctness of a small set of page elements. The coverage and depth provided by these tests is small, 
but we can run them quickly and regularly to detect possible errors.

The `includes` subdirectory contains tests against common page elements. The files here can be a useful basis for any new test. Include 
them in your test when possible to avoid duplicating any code.

These tests can be run manually with a command such as `node tests/oit_homepage_test.js`. They can also be bundled into a shell script and 
schedule to run as a test suite.
