import api from "../api.js";

export const postChapter = (id) => {
  const body = {
    name: "Название главы",
    text: "Текст главы.",
    first_comment: "...",
    end_comment: "...",
    work: id
};
  return api.post(`/works/${id}/chapters/`, body)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

export const getChapters = (workId) => {
  return api.get(`/works/${workId}/chapters/`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

export const getChapter = (workId, chapterId) => {
    return api.get(`/works/${workId}/chapters/${chapterId}/`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching data:', error);
      });
};

export const putChapter = (workId, chapterId, body) => {
  return api.put(`/works/${workId}/chapters/${chapterId}/`, body)
    .then(response => console.log(response.data))
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

export const deleteChapter = (workId, chapterId) => {
    return api.delete(`/works/${workId}/chapters/${chapterId}`)
      .then(response => console.log(response.data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };