import API_ENDPOINT from '../global/api-endpoint.js';

class DicodingRestaurantSource {
  static async getAllRestaurant() {
    const response = await fetch(API_ENDPOINT.GET_ALL);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }
  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }
  static async postReview(data) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });

    return await response.json();
  }
}

export default DicodingRestaurantSource;
