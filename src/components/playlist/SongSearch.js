import React, { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
function SongSearch({ spotify }) {
  const [query, setQuery] = useState("a");
  const [results, setResults] = useState();
  const [selection, setSelection] = useState();

  const searchHandler = (string, result) => {
    setQuery(string);
    spotify.searchTracks(query).then(
      (data) => {
        setResults(data.body.tracks.items);
      },
      (err) => {
        console.error(err);
      }
    );
  };
  const handleOnSelect = (item) => {
    setSelection(item);
  };
  const formatResult = (item) => {
    return item;
  };
  useEffect(() => {
    console.log(selection);
  }, [selection]);
  return (
    <div className="flex justify-center items-center">
      <div className="sm:w-2/3 w-3/4 ">
        <ReactSearchAutocomplete
          items={results}
          resultStringKeyName={"name"}
          onSearch={searchHandler}
          formatResult={formatResult}
          onSelect={handleOnSelect}
          autoFocus
        />
      </div>
    </div>
  );
}

export default SongSearch;
