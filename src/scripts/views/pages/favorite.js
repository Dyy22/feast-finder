import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import ContentItemInitiator from '../../utils/content-item-initiator.js';

const Favorite = {
  async render() {
    return `
      <div id="/content" class="content">
        <h2 class="content__heading">Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length > 0) {
      ContentItemInitiator.init(restaurantsContainer, restaurants);
    } else {
      restaurantsContainer.style.display = 'flex';
      restaurantsContainer.innerHTML = `
        <h3 class="no__favorite">there are no favorite restaurants :(</h3>
      `;
    }
  },
};

export default Favorite;
