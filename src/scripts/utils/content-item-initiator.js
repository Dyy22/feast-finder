import {createRestaurantItemTemplate} from '../views/templates/template-creator.js';

const ContentItemInitiator = {
  init(restaurantsContainer, restaurants) {
    this._restaurantsContainer = restaurantsContainer;
    this._restaurants = restaurants;

    this._renderItem();
  },

  _renderItem() {
    this._restaurants.forEach((restaurant) => {
      const anchorWrapper = document.createElement('a');
      anchorWrapper.href = `/#/detail/${restaurant.id}`;
      anchorWrapper.classList.add('restaurant__item__anchor');

      const restaurantItem = document.createElement('div');
      restaurantItem.innerHTML = createRestaurantItemTemplate(restaurant);
      restaurantItem.classList.add('restaurant__item');

      anchorWrapper.appendChild(restaurantItem);

      this._restaurantsContainer.appendChild(anchorWrapper);
    });
  },
};

export default ContentItemInitiator;
