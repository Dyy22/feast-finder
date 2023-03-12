import CONFIG from './config.js';

const API_ENDPOINT = {
  GET_ALL: `${CONFIG.BASE_URL}/list`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  PICTURE: (size, id) => `${CONFIG.BASE_URL}/images/${size}/${id}`,
};

export default API_ENDPOINT;
