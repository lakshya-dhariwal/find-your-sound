import React from "react";

function Login() {
  const authUrl =
    "https://accounts.spotify.com/authorize?client_id=393e1941ab6e4dad966c935a63c3cf6b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  return (
    <>
      <div>
        <h1 className="logo">QUICKKLY</h1>
      </div>
      <div className="flex min-w-full min-h-full items-center justify-center">
        <a href={authUrl}>
          <button className="LoginSpotify">
            Log in with <img src="spotify-logo-black.png" alt="spotify" />
          </button>
        </a>
      </div>
    </>
  );
}

export default Login;
