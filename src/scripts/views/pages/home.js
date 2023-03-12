import DicodingRestaurantSource from '../../data/dicoding-restaurant-source.js';
import ContentItemInitiator from '../../utils/content-item-initiator.js';

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner">
          <h2 class="hero__title">Find the Best Bites in Town</h2>
          <p class="hero__tagline">
            With a comprehensive list of restaurants and user-generated 
            reviews, you'll never have to settle for a subpar meal again.
          </p>
        </div>
      </div>
      <div id="/content" class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },
  async afterRender() {
    const restaurants = await DicodingRestaurantSource.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');

    ContentItemInitiator.init(restaurantsContainer, restaurants);
  },
};

export default Home;
