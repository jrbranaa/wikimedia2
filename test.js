const assert = require('assert');

var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var test = require( 'selenium-webdriver/testing' );

test.describe( 'Main page title', function () {
	var driver;

	test.beforeEach( function () {
		driver = new webdriver.Builder()
		.forBrowser( 'firefox' )
		.build();
	} );

	test.afterEach( function () {
		driver.quit();
	} );

	test.it( 'should have correct title', function () {
		driver.get( 'https://en.wikipedia.beta.wmflabs.org/wiki/Main_Page' );
		driver.getTitle().then(function(title) {
			assert.equal(title,"Wikipedia, the free encyclopedia");
		});
	} );
} );





