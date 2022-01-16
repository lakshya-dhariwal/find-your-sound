import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Playlist({ spotify, playlist, setPlaylist }) {
  const deleteSongHandler = (uuid) => {
    const newPlaylist = playlist.filter((song) => {
      return song.uuid != uuid;
    });
    setPlaylist(newPlaylist);
  };
  console.log(playlist);
  return (
    <div className="text-slate-50 mx-5">
      <Link to="/">
        <div className="px-7 mx-2 text-xs ">← Home</div>
      </Link>
      <h1 className="px-7 text-lg my-1">Playlist Creator</h1>

      <ul className="grid grid-cols-3 md:grid-cols-7 sm:grid-cols-4 ">
        {playlist
          ? playlist.map((song) => {
              return (
                <li className="m-2 text-center bg-slate-700">
                  <div className="flex flex-col items-center justify-between h-full pt-1">
                    <img src={song.imgUrl} width={50} />{" "}
                    <h1 className="text-sm">{song.name}</h1>
                    <h2 className="text-xs ">{song.artist}</h2>
                    <button
                      className="w-full bg-red-500"
                      onClick={() => deleteSongHandler(song.uuid)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })
          : "Add Songs from Discover"}
        {}
      </ul>
    </div>
  );
}

export default Playlist;
