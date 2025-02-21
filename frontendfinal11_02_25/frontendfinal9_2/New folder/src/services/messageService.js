import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api/messages';

export const messageService = {
  async createMessage(messageData) {
    try {
      const response = await axios.post(API_BASE_URL, messageData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  async getAllMessages() {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  async getMessagesByStatus(status) {
    try {
      const response = await axios.get(`${API_BASE_URL}/status/${status}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  async updateMessageStatus(id, status) {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}/status?status=${status}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};