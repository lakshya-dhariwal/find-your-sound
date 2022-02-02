import SpotifyWebApi from "spotify-web-api-node";
import data from "../constants/index.js";
export default function useApi(accessToken) {
  if (!accessToken) {
    return;
  }
  let spotify = new SpotifyWebApi({
    clientId: data.CLIENT_ID,
    redirectUri: data.REDIRECT_URI,
  });
  spotify.setAccessToken(accessToken);
  return spotify;
}
