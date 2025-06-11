import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    accessToken: localStorage.getItem('access') || null,
    refreshToken: localStorage.getItem('refresh') || null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },

  actions: {
    async register({ username, email, password }) {
      try {
        await axios.post('users/register/', {
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
          const response = await axios.post('users/login/', {
            username,
            password,
          });
  
          this.accessToken = response.data.access;
          this.refreshToken = response.data.refresh;
  
          localStorage.setItem('access', this.accessToken);
          localStorage.setItem('refresh', this.refreshToken);

          console.log('response.data: ', JSON.stringify(response.data));
  
          // Fetch the current user by ID after login
          await this.fetchCurrentUser(response.data.userId); // Assuming userId is returned in the login response
        } catch (error) {
          throw error.response?.data || error;
        }
    },

    async fetchCurrentUser(userId) {
    if (!this.accessToken) return;

    try {
        const response = await axios.get(`users/`, {
        headers: {
            Authorization: `Bearer ${this.accessToken}`,
        },
        });
        this.user = response.data;
    } catch (error) {
        this.logout();
    }
    },

    logout() {
      this.user = null
      this.accessToken = null
      this.refreshToken = null
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
    },
  },
})