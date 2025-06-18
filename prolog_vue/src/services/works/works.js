// import axios from 'axios';
import api from "../api.js";

export const getWorks = () => {
  return api.get('/works/')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

export const getWork = (id) => {
  return api.get(`/works/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

export const postWork = () => {
  const body = {
    name: "Ваша работа",
    description: "Описание работы",
    translation: false,
    author_original: "",
    original: "",
    publish: false,
    size: 1,
    orientation: 1,
    rating: 1,
    type: 1,
    status: 1,
    genres: [1],
    fandom: []
};
  return api.post(`/works/`, body)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

export const putWork = (id, body) => {
  return api.put(`/works/${id}/`, body)
    .then(response => console.log(response.data))
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

export const deleteWork = (id) => {
  return api.delete(`/works/${id}/`)
    .then(response => console.log(response.data))
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};



export const getPopularWorks = async () => {
  try {
    const response = await api.get('/works/')
    return response.data.slice(0, 8);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getNewWorks = async () => {
  try {
    const response = await api.get('/works/');
    // return response.data.slice(-5);
    const sortedWorks = response.data.sort((a, b) => {
      return new Date(b.date_of_editing) - new Date(a.date_of_editing);
    });
    return sortedWorks.slice(0, 10);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};