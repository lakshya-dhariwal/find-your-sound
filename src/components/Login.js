import React from "react";
import AnimatedCard from "./motionComponents/AnimatedCard.js";

function Login() {
  const authUrl =
    "https://accounts.spotify.com/authorize?client_id=393e1941ab6e4dad966c935a63c3cf6b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  return (
    <>
      <div className="min-h-screen flex   flex-col items-center justify-around logo ">
        <div className=" text-center">
          <h1 className="p-4  text-2xl">Find Your Sound</h1>
          <h2>
            Streamline the process from discovery of music to addition to your
            library
          </h2>
        </div>
        <a href={authUrl}>
          <AnimatedCard className=" ">
            <div className="mx-auto border rounded-md p-2 bg-green-400">
              <div className="flex text-neutral-900  mx-2">
                <img
                  src="spotify-black.svg"
                  width={25}
                  alt="spotify"
                  className="mx-2"
                />
                Log in with Spotify
              </div>
            </div>
          </AnimatedCard>
        </a>
      </div>
    </>
  );
}

export default Login;
