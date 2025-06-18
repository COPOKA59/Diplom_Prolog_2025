import api from "../api.js";

export const getMetaData = () => {
  return Promise.all([
    api.get('/meta/fandom/'),
    api.get('/meta/genres/'),
    api.get('/meta/orientation/'),
    api.get('/meta/rating/'),
    api.get('/meta/size/'),
    api.get('/meta/status/')
  ])
  .then(([fandomResponse, genresResponse, orientationResponse, ratingResponse, sizeResponse, statusResponse]) => {
    return {
      fandoms: fandomResponse.data,
      genres: genresResponse.data,
      orientation: orientationResponse.data,
      rating: ratingResponse.data,
      size: sizeResponse.data,
      status: statusResponse.data
    };
  })
  .catch(error => {
    console.error('Error fetching metadata:', error);
  });
};

export const getQuestions = () => {
  return api.get('/meta/questions/')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

export const getWorkQuestions = (workId) => {
  return api.get(`{/works/${workId}/questions/}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};