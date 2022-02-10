const assert = require('assert');

Feature('Example Feature');

Scenario('first test', ({ I }) => {
    I.amOnPage("http://example.com");
    I.wait(1);
    I.saveScreenshot("test.png", true);
});

Scenario('second test', ({ I }) => {
    I.amOnPage("http://example.com");
    I.see("Example");
    I.dontSee("Google");
    I.seeElement("h1");
    I.dontSee("ideopfiwjoc");
    I.wait(2);
});

Scenario('third test', async ({ I }) => {
    I.amOnPage("http://example.com");
    const text = await I.grabTextFrom('h1');
    I.wait(3);
    assert(text, 'Example Domain', 'Text does not match')
});