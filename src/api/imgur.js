import qs from 'qs'

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
  }
};
