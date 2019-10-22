import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = process.env.VUE_APP_IMGUR_CLIENT_ID;
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
      const querystring = {
        client_id: CLIENT_ID,
        response_type: 'token'
      };
      console.log(querystring);
      window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
};
