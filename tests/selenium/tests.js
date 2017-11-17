var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

test.describe('Check json-editor functionality', function() {
    this.timeout(10000);
    test.it('validation works', function() {
        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
        driver.get('http://localhost:9001/tests/selenium/tests.html');

        var cityInput = driver.findElement(webdriver.By.name('root[0][location][city]'));
        cityInput.clear();
        cityInput.sendKeys('Stuttgart');

        cityInput.getAttribute('value').then(function(value) {
            assert.equal(value, 'Stuttgart');
        });

        var deleteLastButton = driver.findElement(webdriver.By.className('json-editor-btn-delete'));
        deleteLastButton.click();

        driver.quit();
    });
});