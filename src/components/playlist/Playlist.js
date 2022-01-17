import React, { useState } from "react";
import { Link } from "react-router-dom";
import SongSearch from "./SongSearch.js";
import { v4 as uuidv4 } from "uuid";
function Playlist({ spotify, playlist, setPlaylist }) {
  const [playlistName, setPlaylistName] = useState(
    "Playlist by Find Your Sound"
  );
  const deleteSongHandler = (uuid) => {
    const newPlaylist = playlist.filter((song) => {
      return song.uuid !== uuid;
    });
    setPlaylist(newPlaylist);
  };
  return (
    <div className="text-slate-50 mx-5">
      <Link to="/">
        <div className="px-7 mx-2 text-xs ">← Home</div>
      </Link>
      <h1 className="px-7 text-lg my-1">Playlist Creator</h1>
      {/* <input type="text" onChange={(e) => playlistName(e.target.value)} /> */}
      <SongSearch
        playlist={playlist}
        setPlaylist={setPlaylist}
        spotify={spotify}
      />
      <div className="w-full flex items-center">
        <ul className="grid grid-cols-1 sm:grid-cols-3 mx-10 sm:mx-0 md:grid-cols-4 m-4 gap-10 sm:grid-cols-4 ">
          {playlist
            ? playlist.map((song) => {
                return (
                  <li className=" text-center " key={uuidv4()}>
                    <div className=" mx-3 relative flex  items-center justify-between h-full pt-1 w-full  m-h-fit">
                      <img src={song.imgUrl} width={50} alt="" />
                      <div className="p-3">
                        <h1 className="text-sm">{song.name}</h1>
                        <h2 className="text-xs ">{song.artist}</h2>
                      </div>
                      <img
                        onClick={() => deleteSongHandler(song.uuid)}
                        src="delete.svg"
                        alt=""
                        width={30}
                        className=" text-red-500 text-xl cursor-pointer px-1"
                      />
                    </div>
                  </li>
                );
              })
            : "Add Songs from Discover"}
          {}
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
