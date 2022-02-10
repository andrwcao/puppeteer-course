Feature('Example Feature');

Scenario('first test', ({ I }) => {
    I.amOnPage("http://example.com");
    I.wait(3);
});
