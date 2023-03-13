import apiEndpoint from '../../global/api-endpoint.js';
import Constant from '../../global/constant.js';

const createRestaurantItemTemplate = (restaurant) => `
  <figure>
    <figcaption class="restaurant__thumbnail__caption">
      ${restaurant.city}
    </figcaption>
    <img 
      data-src="${apiEndpoint.PICTURE(Constant.SMALL, restaurant.pictureId)}" 
      alt="${restaurant.name}" 
      class="restaurant__thumbnail lazyload"
    >
    <p class="restaurant__thumbnail__rating">⭐ ${restaurant.rating}</p>
  </figure>
  <div class="restaurant__content">
    <h3>${restaurant.name}</h3>
    <p>${restaurant.description}</p>
  </div>
`;


const createRestaurantDetailTemplate = (restaurant) => `
  <h2 id="/content" class="restaurant__title">${restaurant.name}</h2>
  <div class="restaurant__detail">
    <img 
      class="restaurant__detail__thumbnail" 
      src="${apiEndpoint.PICTURE(Constant.LARGE, restaurant.pictureId)}" 
      alt="${restaurant.name}" 
    />
    <div class="restaurant__detail__info">
      <h3>Information</h3>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Categories</h4>
      <p>${restaurant.categories.map((category) => ' ' + category.name)}</p>
      <h4>Rating</h4>
      <p>⭐ ${restaurant.rating}</p>
    </div>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestaurantMenuTemplate = (menus) => `
  <h3>Menus</h3>
  <div class="restaurant__menu__wrapper">
    <div class="restaurant__menu__foods">
     <h4>Foods</h4>
     <ul class="restaurant__menu__list">
      ${menus.foods.map((food) => `
        <li>${food.name}</li>
      `).join('')}
     </ul>
    </div>
    <div class="restaurant__menu__drinks">
      <h4>Drinks</h4>
      <ul class="restaurant__menu__list">
       ${menus.drinks.map((drink) => `
         <li>${drink.name}</li>
       `).join('')}
      </ul>
    </div>
  </div>
`;
const createRestaurantReviewTemplate = (reviews) => `
  <h3>Customer Reviews</h3>
    ${reviews.map((review) => `
      <div class="restaurant__review__wrapper">
        <i class="fa-regular fa-user restaurant__review__pict"></i>
        <div class="restaurant__review__content">
           <h4>${review.name}</h4>
           <p class="restaurant__review__date">${review.date}</p>
           <p>${review.review}</p>
        </div>
      </div>
    `).join('')}
`;

const createRestaurantAddReviewTemplate = () => `
  <h3>Create Review</h3>
  <form id="restaurant__review__form">
    <input 
      type="text" 
      name="name" 
      id="name" 
      placeholder="Please type your name"
      required
    >
    <textarea 
      name="review" 
      id="review"
      placeholder="Please type your review"
      required
    ></textarea>
    <button type="submit">Submit</button>
  </form>
`;

const createLikeMovieButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeMovieButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantMenuTemplate,
  createRestaurantReviewTemplate,
  createRestaurantAddReviewTemplate,
  createLikeMovieButtonTemplate,
  createUnlikeMovieButtonTemplate,
};
