import React from "react";
import AnimatedCard from "../motionComponents/AnimatedCard.js";
function SuggestedSearch({ spotify, setResult, setIsLoading }) {
  const suggestedSearchHandler = (q) => {
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
  return (
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
          <h2 className="px-2 m-2 border rounded-2xl text-slate-300 border-sky-900 hover:bg-sky-900 cursor-pointer h-fit">
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
  );
}

export default SuggestedSearch;
