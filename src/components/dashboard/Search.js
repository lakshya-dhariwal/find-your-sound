import { getSuggestedQuery } from "@testing-library/react";
import React, { useState, useEffect } from "react";
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

  const suggestedSearchHandler = (q) => {
    console.log(q);
    spotify.searchPlaylists(q).then(
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
        <h1 className="text-slate-100 pb-2">Search for a playlist</h1>
        <input
          type="text"
          className="mx-3 w-2/3 md:w-96 text-slate-800 text-center "
          placeholder=""
          onChange={searchHandler}
        />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 text-center mb-4">
        <AnimatedCard>
          <div onClick={() => suggestedSearchHandler("Discover Weekly")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-200 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
              Discover Weekly
            </h2>
          </div>
        </AnimatedCard>
        <AnimatedCard onClick={() => suggestedSearchHandler("Missed Hits")}>
          <div onClick={() => suggestedSearchHandler("Discover Weekly")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-200 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
              Missed Hits
            </h2>
          </div>
        </AnimatedCard>
        <AnimatedCard>
          <div onClick={() => suggestedSearchHandler("Time Capsule")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-200 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
              Time Capsule
            </h2>
          </div>
        </AnimatedCard>
        <AnimatedCard>
          <div className="" onClick={() => suggestedSearchHandler("Top Hits")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-300 border-sky-900 hover:bg-slate-ky cursor-pointer h-fit">
              Top Hits
            </h2>
          </div>
        </AnimatedCard>
        <AnimatedCard>
          <div onClick={() => suggestedSearchHandler("Release Radar")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-200 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
              Release Radar
            </h2>
          </div>
        </AnimatedCard>
        <AnimatedCard>
          <div onClick={() => suggestedSearchHandler("This is")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-200 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
              This is
            </h2>
          </div>
        </AnimatedCard>
        <AnimatedCard onClick={() => suggestedSearchHandler("Rock Classics")}>
          <div onClick={() => suggestedSearchHandler("Rock Classics")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-200 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
              Rock Classics
            </h2>
          </div>
        </AnimatedCard>
        <AnimatedCard>
          <div onClick={() => suggestedSearchHandler("Alternative Rock")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-200 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
              Alternative Rock
            </h2>
          </div>
        </AnimatedCard>
        <AnimatedCard>
          <div onClick={() => suggestedSearchHandler("Indie")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-200 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
              Indie
            </h2>
          </div>
        </AnimatedCard>
        <AnimatedCard>
          <div onClick={() => suggestedSearchHandler("Chill Hits")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-200 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
              Chill Hits
            </h2>
          </div>
        </AnimatedCard>
        <AnimatedCard>
          <div className="" onClick={() => suggestedSearchHandler("Pop")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-200 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
              Pop
            </h2>
          </div>
        </AnimatedCard>
        <AnimatedCard>
          <div onClick={() => suggestedSearchHandler("Workout")}>
            <h2 className="px-2 m-2 border rounded-2xl text-slate-200 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
              Workout
            </h2>
          </div>
        </AnimatedCard>
      </div>
      <div className=" w-2/3 min-h-3/4 min-w-full">
        {isLoading ? (
          ""
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
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
                <div
                  classNmae="min-w-full"
                  key={item.id}
                  onClick={() => playlistHandler(item.id)}
                >
                  <AnimatedCard className="min-w-full">
                    <div className=" flex flex-col items-center cursor-pointer justify-center w-28">
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
