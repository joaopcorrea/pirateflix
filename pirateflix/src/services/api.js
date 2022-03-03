import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;


export const getRepositories = async(userId, query) => {
  let url = `/users/${userId}/repositories/`;

  if (query !== '') {
    url += `?q=${query}`;
  }

  return api.get();
};