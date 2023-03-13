const assert = require('assert');

Feature('Liking Restaurants');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({I}) => {
  I.waitForElement('#restaurants');
  I.see('there are no favorite restaurants :(', '.no__favorite');
});

Scenario('liking one restaurant', async ({I}) => {
  I.see('there are no favorite restaurants :(', '.no__favorite');

  I.amOnPage('/');

  I.waitForElement('.restaurant__item');

  const firstRestaurant = locate('.restaurant__item__anchor').first();
  const firstFilmTitle = await I.grabTextFrom(firstRestaurant.find('.restaurant__content h3'));
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant__item__anchor');
  const likedFilmTitle = await I.grabTextFrom('.restaurant__content h3');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});
