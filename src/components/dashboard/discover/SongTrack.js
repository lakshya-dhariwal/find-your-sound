import React from "react";
import { useState } from "react/cjs/react.development";
import { motion } from "framer-motion";
import { useStoreActions } from "easy-peasy";
function SongTrack({
  imgUrl,
  id,
  audioUrl,
  setDisplay,
  song,
  artist,
  uri,
  spotify,
}) {
  //states
  const [audio, setAudio] = useState(new Audio(audioUrl));
  const [value, setValue] = useState({
    imgUrl,
    id,
    audioUrl,
    name: song,
    artist,
    uri,
  });
  //for easy peasy actions
  const addSong = useStoreActions((actions) => actions.addSong);
  const likeSongHandler = (id) => {
    console.log(id);
    spotify.addToMySavedTracks([id]).then(
      (data) => {
        if (data.statusCode == 200) {
          setDisplay({ success: "Song Liked!" });
        }
      },
      (err) => {
        console.error(err);
      }
    );
  };
  const addSongHandler = (value) => {
    addSong(value);
    setDisplay({ success: "Song added to Playlist Creator!" });
  };
  //song handlers
  const pause = () => {
    console.log(audioUrl);
    audio.pause();
    console.log("pause", id);
  };
  const play = () => {
    console.log(audioUrl);
    audio.play();
    console.log("play", id);
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
        onClick={() => addSongHandler(value)}
      />

      <motion.img
        whileTap={{ scale: "0.8" }}
        className="absolute top-0 right-0 w-4 sm:w-8 p-1 cursor-pointer"
        src="like.svg"
        onClick={() => likeSongHandler(id)}
      />

      <img onHover={{ scale: 1.1 }} src={imgUrl} />
    </div>
  );
}

export default SongTrack;
