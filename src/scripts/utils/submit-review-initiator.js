import {
  createRestaurantAddReviewTemplate,
  createRestaurantReviewTemplate,
} from '../views/templates/template-creator.js';
import DicodingRestaurantSource from '../data/dicoding-restaurant-source.js';

const RestaurantReviewInitiator = {
  init({
    restaurantReviewContainer,
    restaurantAddReviewContainer,
    restaurant,
  }) {
    this._restaurantReviewContainer = restaurantReviewContainer;
    this._restaurantAddReviewContainer = restaurantAddReviewContainer;
    this._restaurant = restaurant;

    this._renderRestaurantReviewContainer(this._restaurant.customerReviews);
    this._renderRestaurantAddReviewContainer();
  },

  _renderRestaurantAddReviewContainer() {
    this._restaurantAddReviewContainer.innerHTML = createRestaurantAddReviewTemplate();

    const restaurantReviewForm = document.querySelector('#restaurant__review__form');

    restaurantReviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(restaurantReviewForm);
      await this._submitForm(Object.fromEntries(formData));

      restaurantReviewForm.reset();

      const restaurant = await DicodingRestaurantSource.getDetailRestaurant(this._restaurant.id);
      this._renderRestaurantReviewContainer(restaurant.customerReviews);
    });
  },

  _renderRestaurantReviewContainer(reviews) {
    this._restaurantReviewContainer.innerHTML = createRestaurantReviewTemplate(reviews);
  },

  async _submitForm(data) {
    return await DicodingRestaurantSource.postReview({
      ...data,
      id: this._restaurant.id,
    });
  },
};

export default RestaurantReviewInitiator;
