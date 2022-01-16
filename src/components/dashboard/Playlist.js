import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";

function Playlist() {
  const [playlist, setPlaylist] = useState();
  const data = useStoreState((state) => state.playlist);
  useEffect(async () => {
    setPlaylist(data);
    console.log(playlist);
  }, []);

  console.log(playlist);
  return (
    <div className="text-slate-50 mx-5">
      <Link to="/">
        <div className="px-7 mx-2">Home</div>
      </Link>

      <ul className="grid grid-cols-3 md:grid-cols-7 sm:grid-cols-4 ">
        {playlist
          ? playlist.map((song) => {
              return (
                <li className="m-2 text-center bg-slate-700">
                  <div className="flex flex-col items-center justify-between h-full pt-1">
                    <img src={song.imgUrl} width={50} />{" "}
                    <h1 className="text-sm">{song.name}</h1>
                    <h2 className="text-xs ">{song.artist}</h2>
                    <button className="w-full bg-red-500">Delete</button>
                  </div>
                </li>
              );
            })
          : ""}
        {}
      </ul>
    </div>
  );
}

export default Playlist;
