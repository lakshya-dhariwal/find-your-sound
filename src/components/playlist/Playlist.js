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
  const playlistNameHandler = (e) => {
    setPlaylistName(e.target.value);
  };
  const savePlaylistHandler = () => {
    let playlistId;
    let tracks = [];
    playlist.map((track) => {
      tracks.push(track.uri);
      return track;
    });
    spotify.createPlaylist(playlistName).then(
      (data) => {
        playlistId = data.body.id;
        spotify.addTracksToPlaylist(playlistId, tracks).then(
          (data) => {
            if (data.statusCode === 201) {
              setPlaylistName("Playlist by Find Your Sound");
              setPlaylist([]);
              alert("Playlist added to Your Spotify Library");
            }
          },
          (err) => {
            console.error(err);
          }
        );
      },
      (err) => {
        console.error(err);
      }
    );
  };
  return (
    <div className="text-slate-50 mx-5 ">
      <div className="w-20">
        <Link to="/">
          <div className="w-fit mx-2 text-xs ">← Home</div>
        </Link>
      </div>
      <h1 className="px-7 text-lg my-1">Playlist Creator</h1>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="h-10 md:w-96  bg-slate-100 text-center text-slate-800 placeholder-slate-700  rounded-l-3xl "
          placeholder="Enter Playlist Name"
          onChange={playlistNameHandler}
        />
        <button
          onClick={savePlaylistHandler}
          className="h-10 bg-slate-900 text-slate-500 p-1 rounded-r-3xl px-3 border border-gray-500 hover:text-slate-200"
        >
          <h1 className="text-xs sm:text-sm">Save Playlist</h1>
        </button>
      </div>
      <div className="w-full flex items-center justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-3 mx-10 sm:mx-0 md:grid-cols-4 m-4 gap-10  z-0 ">
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
      <div>
        <SongSearch
          playlist={playlist}
          setPlaylist={setPlaylist}
          spotify={spotify}
        />
      </div>
    </div>
  );
}

export default Playlist;
