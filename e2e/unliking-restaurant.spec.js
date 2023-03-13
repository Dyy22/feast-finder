Feature('Unliking Restaurants');

Before(({I}) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__item');
  I.click(locate('.restaurant__item__anchor').first());

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
});

Scenario('showing liked restaurant', ({I}) => {
  I.waitForElement('.restaurant__item');
});

Scenario('unliking one restaurant', ({I}) => {
  I.waitForElement('.restaurant__item');

  I.click(locate('.restaurant__item__anchor').first());

  I.waitForElement('[aria-label="unlike this restaurant"]');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.waitForElement('#restaurants');
  I.see('there are no favorite restaurants :(', '.no__favorite');
});
