import React from "react";
import { useState } from "react/cjs/react.development";
import AnimatedCard from "../motionComponents/AnimatedCard";
function SongTrack({ key, imgUrl, id, audioUrl }) {
  const [audio, setAudio] = useState(new Audio(audioUrl));
  const pause = () => {
    audio.pause();
    console.log("pause", id);
  };
  const play = () => {
    audio.play();
    console.log("play", id);
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
