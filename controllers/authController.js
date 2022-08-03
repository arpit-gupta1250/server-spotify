const UrlHelper = require('../helpers/urlHelper'); 
const AuthService = require('../services/authService');

module.exports = {
  authenticateUser(request, response, next) {
    try {
      redirectToAuthorizationPage(response);
    } catch(error) {
      console.log(error);
    }
  },

  async authorizeRequest(request, response, next) {
    try {
      const authorizationCode = request.query.code;
      const authorizationToken = await AuthService.getAuthorizationToken(authorizationCode);
      console.log("------Authorization Token-----", authorizationToken);
    } catch (error) {
      console.log(error);
    }
  },
};

function redirectToAuthorizationPage(response) {
  const spotifyAuthorizeUrl = UrlHelper.getSpotifyAuthorizeUrl();
  response.redirect(spotifyAuthorizeUrl);
}