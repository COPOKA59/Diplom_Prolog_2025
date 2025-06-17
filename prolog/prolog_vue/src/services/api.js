import axios from 'axios';
import { useUserStore } from '@/stores/user';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

api.interceptors.request.use((config) => {
    const userStore = useUserStore();
    if (userStore.accessToken) {
      config.headers.Authorization = `Bearer ${userStore.accessToken}`;
    }
    return config;
});

api.interceptors.response.use(
    response => response,
    async (error) => {
      const userStore = useUserStore();
  
      const originalRequest = error.config;
  
      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        userStore.refreshToken &&
        !originalRequest.url.includes('/users/token/refresh/')
      ) {
        originalRequest._retry = true;
  
        const refreshed = await userStore.refreshAccessToken();
  
        if (refreshed) {
          originalRequest.headers.Authorization = `Bearer ${userStore.accessToken}`;
          return api(originalRequest);
        } else {
          userStore.logout();
        }
      }
  
      return Promise.reject(error);
    }
);


export default api;