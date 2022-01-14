import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimatedCard from "../motionComponents/AnimatedCard";

function Discover({ spotify, discoverPlaylist }) {
  const [tracks, setTracks] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    spotify.getPlaylistTracks(discoverPlaylist.id).then(
      (data) => {
        console.log(data.body.items);
        setTracks(data.body.items);
        setIsLoading(false);
      },
      (err) => {
        console.error(err);
      }
    );
  }, []);

  return (
    <div className="text-slate-50">
      <h1 className="text-slate-50">Discover</h1>
      <div className="flex items-center  px-10 mt-5">
        <img
          src={discoverPlaylist.image}
          alt={discoverPlaylist.name}
          width={100}
        />
        <div className=" p-3">
          <h1>{discoverPlaylist.name}</h1>
          <h2 className="text-xs">by {discoverPlaylist.author}</h2>
          <h2>{discoverPlaylist.description}</h2>
        </div>
      </div>
      <div className=" w-2/3 min-h-3/4 min-w-full">
        {isLoading ? (
          "Loading"
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
                <div className="min-h-fit" key={item.track.id}>
                  <AnimatedCard>
                    <img src={item.track.album.images[0].url} alt="" />
                  </AnimatedCard>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Discover;
