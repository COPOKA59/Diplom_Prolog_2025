import axios from 'axios';

export const getWorks = async () => {
    try {
      const response = await axios.get('/works/');
      console.log('data: ', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

export const getWork = async (id) => {
  try {
    const response = await axios.get(`/works/${id}`);
    console.log('data: ', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};