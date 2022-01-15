import React from "react";
import { useState } from "react/cjs/react.development";
import AnimatedCard from "../../motionComponents/AnimatedCard";
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
    <div onMouseOver={play} onMouseOut={pause}>
      <AnimatedCard>
        <img src={imgUrl} />
      </AnimatedCard>
    </div>
  );
}

export default SongTrack;
