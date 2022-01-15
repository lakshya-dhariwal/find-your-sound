import React from "react";
import { Link } from "react-router-dom";
function Playlist() {
  return (
    <>
      <Link to="/">
        <div className="text-slate-50 px-7 mx-2">&#5176;</div>
      </Link>
      <h1>Playlist</h1>
    </>
  );
}

export default Playlist;
