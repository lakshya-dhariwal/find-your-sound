import { motion } from "framer-motion";
import React, { useState } from "react";

function Search({ spotify }) {
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
              let imgUrl;
              if (!item.images[0]) {
                imgUrl = "playlist.png";
              } else {
                imgUrl = item.images[0].url;
              }
              console.log(item.images);
              return (
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className=" flex flex-col items-center justify-center cursor-pointer">
                    <img className="" src={imgUrl} width={100} />
                    <h1 className="text-slate-300 text-xs">{item.name}</h1>
                  </div>
                </motion.button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
// flex flex-col items-center cursor-pointer
