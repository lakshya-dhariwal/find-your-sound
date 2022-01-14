import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Discover({ spotify }) {
  const { id } = useParams();
  const [tracks, setTracks] = useState();

  useEffect(() => {
    spotify.getPlaylistTracks(id).then(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);
  return (
    <div>
      <h1>Discover</h1>
    </div>
  );
}

export default Discover;
