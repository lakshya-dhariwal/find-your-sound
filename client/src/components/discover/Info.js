import React from "react";
import { Link } from "react-router-dom";
function Info({ discoverPlaylist, display }) {
  return (
    <div>
      <div className="text-slate-100 px-10">
        <Link to="/">Search</Link> → <Link to="/discover">Discover</Link>
      </div>
      <div className="text-slate-50 ">
        <div className="flex items-start justify-start px-10 mt-5">
          <div className="flex  items-center ">
            <img
              className="invisible sm:visible "
              src={discoverPlaylist.image}
              alt={discoverPlaylist.name}
              width={100}
            />
            <div className="p-3 absolute left-2 sm:relative">
              <h1>{discoverPlaylist.name}</h1>
              <h2 className="text-xs">by {discoverPlaylist.author}</h2>
            </div>
          </div>
          <div className="absolute right-1 items-center justify-center w-36 sm:w-50">
            <div className=" m-3 w-34 m flex  items-center justify-center flex-col">
              <h1 className="text-xs sm:text-sm text-center">{display.song}</h1>
              <h1 className="text-xs">{display.artist}</h1>
              {display.warn ? (
                <h1 className="border mt-3 px-2 text-xs sm:text-sm text-center  text-red-400 border-red-400 rounded-2xl">
                  {display.warn}
                </h1>
              ) : (
                ""
              )}
              {display.success ? (
                <h1 className="border mt-3 px-2 text-xs sm:text-sm text-center  text-green-500 border-green-500 rounded-2xl">
                  {display.success}
                </h1>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
