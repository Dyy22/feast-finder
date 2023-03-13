import DicodingRestaurantSource from '../../data/dicoding-restaurant-source.js';
import UrlParser from '../../routes/url-parser.js';
import RestaurantReviewInitiator from '../../utils/submit-review-initiator.js';
import LikeButtonPresenter from '../../utils/like-button-presenter.js';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantDetailTemplate,
  createRestaurantMenuTemplate,
} from '../templates/template-creator.js';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div class="restaurant__menu"></div>
      <div class="restaurant__reviews">
        <div class="restaurant__review"></div>
        <div class="restaurant__add__review"></div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.getDetailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const restaurantMenuContainer = document.querySelector('.restaurant__menu');
    const restaurantReviewContainer = document.querySelector('.restaurant__review');
    const restaurantAddReviewContainer = document.querySelector('.restaurant__add__review');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    restaurantMenuContainer.innerHTML = createRestaurantMenuTemplate(restaurant.menus);

    RestaurantReviewInitiator.init({
      restaurantReviewContainer,
      restaurantAddReviewContainer,
      restaurant,
    });

    await LikeButtonPresenter.init({
      likeButtonContainer,
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant,
    });

    window.scrollTo(0, 0);
  },
};

export default Detail;
