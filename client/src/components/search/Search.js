import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AnimatedCard from "../motionComponents/AnimatedCard.js";
import SuggestedSearch from "./SuggestedSearch.js";

function Search({ spotify, setDiscoverPlaylist }) {
  const history = useHistory();
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (!spotify) {
      console.log("empty access token");
      return;
    }
    spotify.searchPlaylists(searchQuery).then(
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
    <>
      <div className="text-slate-100 px-10 ">
        <Link to="/">Search</Link>
      </div>
      <div className="flex flex-col items-center ml-1 ">
        <div className="flex flex-col items-center p-2 m-2 min-w-full">
          <h1 className="text-slate-100 pb-2">Search for a playlist</h1>
          <form className="h-9" onSubmit={searchSubmitHandler}>
            <input
              type="text"
              className="  md:w-96 text-slate-800 bg-slate-100  text-center h-full rounded-l-3xl "
              placeholder=""
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-slate-100 text-slate-900 h-full p-1 rounded-r-3xl px-3 ">
              <img className="" src="search.svg" width={12} alt="search" />
            </button>
          </form>
        </div>
        <SuggestedSearch
          spotify={spotify}
          setResult={setResult}
          setIsLoading={setIsLoading}
        />
        <div className="  min-h-3/4 min-w-full flex items-center justify-center ">
          {isLoading ? (
            ""
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 m-w-full sm:w-3/4 lg:gird-cols-7 gap-6">
              {result.map((item) => {
                let imgUrl;
                if (!item.images[0]) {
                  imgUrl = "playlist.png";
                } else {
                  imgUrl = item.images[0].url;
                }
                return (
                  <div
                    className="flex items-between "
                    key={item.id}
                    onClick={() => playlistHandler(item.id)}
                  >
                    <AnimatedCard className=" ">
                      <div className=" flex flex-col items-center cursor-pointer justify-between w-28">
                        <img className="" src={imgUrl} alt="" width={100} />
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
    </>
  );
}
export default Search;
