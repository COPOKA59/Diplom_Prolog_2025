import axios from 'axios';

/* export const getWorks = async () => {
    try {
      const response = await axios.get('/works/');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

export const getWork = async (id) => {
  try {
    const response = await axios.get(`/works/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}; */


/*********************************************************************************
 *                                                                               *
 *                              JSON-Server                                      *
 *                                                                               * 
 /********************************************************************************/


// ------------------------------ works ------------------------------

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
    const response = await axios.get(`/works`, 
      { 
        params: { id: id } 
      });
    console.log('data: ', JSON.stringify(response.data));
    return response.data[0];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getPopularWorks = async () => {
  try {
    const response = await axios.get('/works/');
    console.log('data: ', JSON.stringify(response.data));
    return response.data.slice(0, 8);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getNewWorks = async () => {
  try {
    const response = await axios.get('/works/');
    console.log('data: ', JSON.stringify(response.data));
    return response.data.slice(-5);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// ------------------------------ chapters ------------------------------
export const getChapters = async () => {
  try {
    const response = await axios.get('/chapters/');
    console.log('data: ', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export const getChapter = async (id) => {
  try {
    const response = await axios.get(`/chapters`, 
      { 
        params: { id: id } 
      });
    // if (response.data.length === 0) return null;
    return response.data[0]
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};