import React, { useState, useEffect } from "react";
import SongTrack from "./SongTrack";
import Info from "./Info";

function Discover({
  spotify,
  discoverPlaylist,
  setTotal,
  playlist,
  setPlaylist,
}) {
  const [tracks, setTracks] = useState();
  const [display, setDisplay] = useState({
    song: "",
    image: "",
    artist: "",
    warn: "",
    success: "",
  });
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
  }, [discoverPlaylist, spotify]);

  return (
    <>
      <Info discoverPlaylist={discoverPlaylist} display={display} />
      <div className=" text-center text-sm flex items-center justify-center my-3">
        <div className="flex rounded-3xl border w-80 items-center justify-center p-1 text-stone-300  border-slate-500 text-center">
          <h1 className="text-center flex ">
            <img src="info.svg" alt="info" width={30} className="px-2" />
            Hover to play Click + to add to playlist
          </h1>
        </div>
      </div>
      <div className=" w-2/3 min-h-3/4 min-w-full">
        {isLoading ? (
          <h1 className="text-slate-50">Loading...</h1>
        ) : (
          <div className="grid grid-cols-4 md:grid-cols-10 gap-x-1 max-h-fit">
            {tracks.map((item) => {
              let imgUrl;
              if (!item.track.album.images[0]) {
                imgUrl = "album.png";
              } else {
                imgUrl = item.track.album.images[0].url;
              }
              return (
                <SongTrack
                  setDisplay={setDisplay}
                  imgUrl={imgUrl}
                  key={item.track.id}
                  id={item.track.id}
                  audioUrl={item.track.preview_url}
                  song={item.track.name}
                  artist={item.track.artists[0].name}
                  uri={item.track.uri}
                  spotify={spotify}
                  setTotal={setTotal}
                  playlist={playlist}
                  setPlaylist={setPlaylist}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Discover;
