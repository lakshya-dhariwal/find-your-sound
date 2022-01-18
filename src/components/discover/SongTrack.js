import React, { useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
function SongTrack({
  imgUrl,
  id,
  audioUrl,
  setDisplay,
  song,
  artist,
  uri,
  spotify,
  playlist,
  setPlaylist,
}) {
  //states

  const [audio, setAudio] = useState();
  setAudio(new Audio(audioUrl));

  const likeSongHandler = (id) => {
    console.log(id);
    spotify.addToMySavedTracks([id]).then(
      (data) => {
        if (data.statusCode === 200) {
          setDisplay({ success: "Song Liked!" });
        }
      },
      (err) => {
        console.error(err);
      }
    );
  };
  const addSongHandler = () => {
    const value = {
      uuid: uuidv4(),
      imgUrl,
      spotifyId: id,
      name: song,
      artist,
      uri,
    };
    setPlaylist([...playlist, value]);
    setDisplay({ success: "Song added to Playlist Creator!" });
  };
  //song handlers
  const pause = () => {
    console.log("pause");
    audio.pause();
  };
  const play = () => {
    audio.play();
    if (!audioUrl) {
      setDisplay({
        song,
        artist,
        image: imgUrl,
        warn: "  No Preview Available  ",
      });
      return;
    }
    setDisplay({ song, artist, image: imgUrl, warn: false });
  };

  return (
    <div
      className="relative  hover:border-2 hover:border-sky-500"
      onMouseOver={play}
      onMouseOut={pause}
    >
      <motion.img
        whileTap={{ scale: "0.8" }}
        className="absolute left-0 top-0 w-4 sm:w-8 p-1 cursor-pointer"
        src="bookmark.svg"
        onClick={() => addSongHandler()}
        alt=""
      />

      <motion.img
        whileTap={{ scale: "0.8" }}
        className="absolute top-0 right-0 w-4 sm:w-8 p-1 cursor-pointer"
        src="like.svg"
        onClick={() => likeSongHandler(id)}
        alt=""
      />

      <img src={imgUrl} alt="" />
    </div>
  );
}

export default SongTrack;