import React from "react";
import { useState } from "react/cjs/react.development";
import { motion } from "framer-motion";
function SongTrack({ imgUrl, id, audioUrl, setDisplay, song, artist }) {
  const [audio, setAudio] = useState(new Audio(audioUrl));
  const pause = () => {
    console.log(audioUrl);
    audio.pause();
    // setDisplay({ song: " ", artist: " " });
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
      className="relative hover:border hover:border-cyan-400"
      onMouseOver={play}
      onMouseOut={pause}
    >
      <motion.img
        whileTap={{ scale: "0.8" }}
        className="absolute left-0 top-0 w-4 sm:w-8 p-1 cursor-pointer"
        src="bookmark.svg"
      />

      <motion.img
        whileTap={{ scale: "0.8" }}
        className="absolute top-0 right-0 w-4 sm:w-8 p-1 cursor-pointer"
        src="like.svg"
      />

      <img onHover={{ scale: 1.1 }} src={imgUrl} />
    </div>
  );
}

export default SongTrack;
