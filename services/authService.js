const axios = require('axios');
const env = require('../config/env');

module.exports = {
  async getAuthorizationToken(authorizationCode) {
    const payload = {
      grant_type: env.Spotify_Grant_Type,
      code: authorizationCode,
      redirect_uri: env.Redirect_Url,
      client_id: env.Client_Id,
      client_secret: env.Client_Secret,
    };

    const result = await axios.post(
      env.Spotify_Token_Url,
      new URLSearchParams(payload),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return result.data.access_token;
  },
};
