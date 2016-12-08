const assert = require('assert');

var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get('https://en.wikipedia.beta.wmflabs.org/wiki/Main_Page');

driver.getTitle().then(function(title) {
	assert.equal(title,"Wikipedia, the free encyclopedia");
});

driver.quit();
