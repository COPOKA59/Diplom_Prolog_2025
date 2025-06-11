import axios from 'axios';

export const getMetaData = () => {
  return Promise.all([
    axios.get('/meta/fandom/'),
    axios.get('/meta/genres/'),
    axios.get('/meta/orientation/'),
    axios.get('/meta/rating/'),
    axios.get('/meta/size/'),
    axios.get('/meta/status/')
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
  return axios.get('/meta/questions/')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

export const getWorkQuestions = (workId) => {
  return axios.get(`{/works/${workId}/questions/}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};