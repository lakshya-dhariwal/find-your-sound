import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SongTrack from "./SongTrack";

function Discover({ spotify, discoverPlaylist }) {
  const [tracks, setTracks] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    spotify.getPlaylistTracks(discoverPlaylist.id).then(
      (data) => {
        setTracks(data.body.items);
        setIsLoading(false);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return (
    <>
      <div className="text-slate-100 px-10">
        <Link to="/">Search</Link> &#62; <Link to="/discover">Discover</Link>
      </div>
      <div className="text-slate-50">
        <div className="flex items-center  px-10 mt-5">
          <img
            src={discoverPlaylist.image}
            alt={discoverPlaylist.name}
            width={100}
          />
          <div className=" p-3">
            <h1>{discoverPlaylist.name}</h1>
            <h2 className="text-xs">by {discoverPlaylist.author}</h2>
          </div>
        </div>
        <div className=" text-center text-sm flex items-center justify-center my-3">
          <div className="flex rounded-3xl border w-80 items-center justify-center p-1 text-stone-300  border-slate-500 text-center">
            <h1 className="text-center flex ">
              <img src="info.svg" alt="info" width={30} className="px-2" />
              Hover to play Click to add to playlist
            </h1>
          </div>
        </div>
        <div className=" w-2/3 min-h-3/4 min-w-full">
          {isLoading ? (
            <h1 className="text-slate-50">Loading...</h1>
          ) : (
            <div className="grid grid-cols-4 md:grid-cols-10 gap-x-1 max-h-fit">
              {tracks.map((item) => {
                console.log(item);
                let imgUrl;
                if (!item.track.album.images[0]) {
                  imgUrl = "album.png";
                } else {
                  imgUrl = item.track.album.images[0].url;
                }
                return (
                  <SongTrack
                    imgUrl={imgUrl}
                    key={item.track.id}
                    id={item.track.id}
                    audioUrl={item.track.preview_url}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Discover;
