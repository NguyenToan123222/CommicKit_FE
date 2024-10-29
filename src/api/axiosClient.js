import axios from 'axios';
import Utils from '../utils';
import config from '../config';

const axiosClient = axios.create({
  baseURL: config.apiEndpoint,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: config.axiosTimeout,
});

axiosClient.interceptors.request.use(async configAxios => {
  const auth = await Utils.getData(config.storageKey.AUTH);
  if (auth) {
    configAxios.headers.Authorization = `Bearer ${auth}`;
  }
  return configAxios;
});

axiosClient.interceptors.response.use(
  response => {
    if (response?.data) {
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  },
);

export default axiosClient;
