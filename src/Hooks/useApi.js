import SpotifyWebApi from "spotify-web-api-node";

export default function useApi(accessToken) {
  if (!accessToken) {
    console.log("empty access token");
    return;
  }
  let spotify = new SpotifyWebApi({
    clientId: "393e1941ab6e4dad966c935a63c3cf6b",
    redirectUri: "http://localhost:3000",
  });
  spotify.setAccessToken(accessToken);
  return spotify;
}
