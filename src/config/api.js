// API Configuration
const API_BASE_URL = "http://203.190.12.138:8002";

export const getApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

export const getMediaUrl = (path) => {
  return `${API_BASE_URL}${path}`;
};

export default API_BASE_URL;
