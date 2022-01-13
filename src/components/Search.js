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
        console.log(result);
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
      <div className=" w-2/3 min-h-3/4 min-w-full ">
        {isLoading ? (
          "Loading"
        ) : (
          <div className=" flex flex-col items-center px-2">
            {result.map((item) => {
              return (
                <div className="flex flex-col items-center cursor-pointer">
                  <h1 className="text-slate-300 text-sm p-1 ">{item.name}</h1>
                  <img className="pb-4" src={item.images[0].url} width={100} />
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
