import { defineStore } from 'pinia';
import api from '@/services/api';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    accessToken: localStorage.getItem('access') || null,
    refreshToken: localStorage.getItem('refresh') || null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.accessToken,
    isAuthor: (state) => () => {
      return state.isAuthenticated && true;
    },
  },

  actions: {
    async register({ username, email, password }) {
      try {
        await api.post('users/register/', {
          username,
          email,
          password,
        })
      } catch (error) {
        throw error.response?.data || error
      }
    },

    async login({ username, password }) {
        try {
          const response = await api.post('users/login/', {
            username,
            password,
          });
  
          this.accessToken = response.data.access;
          this.refreshToken = response.data.refresh;
  
          localStorage.setItem('access', this.accessToken);
          localStorage.setItem('refresh', this.refreshToken);

          await this.fetchCurrentUser();
      } catch (error) {
        throw error.response?.data || error
      }
    },

    async fetchCurrentUser() {
      /* if (!this.accessToken) return;

      try {
        const response = await api.get('/users/me/', {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
        this.user = response.data[0];
        localStorage.setItem('user', JSON.stringify(this.user));
      } catch (error) {
        if (error.response?.status === 401) {
          const refreshed = await this.refreshAccessToken();
          if (refreshed) {
            console.log('refreshed');
            return this.fetchCurrentUser();
          } else {
            this.logout();
          }
        }
        this.logout();
      } */
        if (!this.accessToken) return;
        const response = await api.get('/users/me/', {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        })
        this.user = response.data[0];
        localStorage.setItem('user', JSON.stringify(this.user));
    },

    async refreshAccessToken() {
      if (!this.refreshToken) return false;

      try {
        const response = await api.post('/users/token/refresh/', {
          refresh: this.refreshToken,
        });
        this.accessToken = response.data.access;
        localStorage.setItem('access', this.accessToken);
        return true;
      } catch (error) {
        this.logout();
        return false;
      }
    },

    logout() {
      /* this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
      localStorage.removeItem('user');
      localStorage.removeItem('access');
      localStorage.removeItem('refresh'); */
      this.user = this.accessToken = this.refreshToken = null;
      localStorage.clear();
    },

    async getUserById(userId) {
      try {
        const response = await api.get(`/users/${userId}/`);
        console.log('response.data user: ', response.data);
        return response.data;
      } catch (error) {
        throw error.response?.data || error
      }
    }
  },
})