import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AnimatedCard from "../motionComponents/AnimatedCard.js";

function Search({ spotify, setDiscoverPlaylist }) {
  const history = useHistory();
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const searchHandler = (e) => {
    if (!spotify) {
      console.log("empty access token");
      return;
    }
    const query = e.target.value;
    spotify.searchPlaylists(query).then(
      (data) => {
        setResult(data.body.playlists.items);
        setIsLoading(false);
      },
      (err) => {
        console.error(err);
      }
    );
  };
  const playlistHandler = (id) => {
    spotify.getPlaylist(id).then(
      (data) => {
        let imgUrl;
        if (!data.body.images[0]) {
          imgUrl = "playlist.png";
        } else {
          imgUrl = data.body.images[0].url;
        }
        setDiscoverPlaylist({
          id: data.body.id,
          name: data.body.name,
          description: data.body.description,
          author: data.body.owner.display_name,
          image: imgUrl,
        });

        history.push("/discover");
      },
      (err) => {
        console.error(err);
      }
    );
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col items-center p-2 m-2 min-w-full">
        <h1 className="text-slate-400">Find your sound</h1>
        <input
          type="text"
          className="mx-3 w-2/3 placeholder-slate-800 text-center"
          placeholder=""
          onChange={searchHandler}
        />
      </div>
      <div className=" w-2/3 min-h-3/4 min-w-full">
        {isLoading ? (
          <h1 className="text-center text-stone-100">
            Search for a Playlist to discover from .<br /> Example Search
            DISCOVER WEEKLY , LOFI , ALTERNATIVE ROCK{" "}
          </h1>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {result.map((item) => {
              console.log(item);
              let imgUrl;
              if (!item.images[0]) {
                imgUrl = "playlist.png";
              } else {
                imgUrl = item.images[0].url;
              }
              console.log(item.images);
              return (
                <div key={item.id} onClick={() => playlistHandler(item.id)}>
                  <AnimatedCard>
                    <div className=" flex flex-col items-center cursor-pointer">
                      <img className="" src={imgUrl} width={100} />
                      <h1 className="text-slate-300 text-xs">{item.name}</h1>
                    </div>
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
export default Search;
