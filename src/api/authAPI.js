import axiosClient from './axiosClient';

const authAPI = {
  requestAuthenticate: ({username, password}) =>
    axiosClient.post(
      `authenticate/authenticate?username=${username}&password=${password}`,
    ),

  requestLogout: ({token}) => axiosClient.post('authenticate/logout', {token}),

  requestGetMyInfo: () => axiosClient.get('authenticate/getMyInfo'),
};

export default authAPI;
