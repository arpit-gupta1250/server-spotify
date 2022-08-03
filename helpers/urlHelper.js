const env = require('../config/env');

module.exports = {
  getSpotifyAuthorizeUrl() {
    return `${env.Base_Url}/authorize?client_id=${env.Client_Id}&response_type=${env.Response_Type}&redirect_uri=${env.Redirect_Url}`;
  },
};