const assert = require('assert');

Feature('Review Restaurants');

Before(({I}) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__item');
  I.click(locate('.restaurant__item__anchor').first());
});

Scenario('showing restaurant reviews', ({I}) => {
  I.waitForElement('.restaurant__reviews');
  I.waitForElement('.restaurant__review__content p');
});

Scenario('write a restaurant reviews', async ({I}) => {
  I.waitForElement('.restaurant__reviews');
  I.waitForElement('#restaurant__review__form');

  const name = 'Popo';
  const text = 'Tidak ramah bintang 1';

  I.fillField('name', name);
  I.fillField('review', text);

  I.click('#restaurant__review__form button');

  I.waitForElement('.restaurant__review');
  I.wait(1);
  const reviewResult = locate('.restaurant__review__wrapper').last();
  const nameResult = await I.grabTextFrom(reviewResult.find('.restaurant__review__content h4'));
  const textResult = await I.grabTextFrom(reviewResult.find('.restaurant__review__content p').last());

  assert.strictEqual(name, nameResult);
  assert.strictEqual(text, textResult);
});
