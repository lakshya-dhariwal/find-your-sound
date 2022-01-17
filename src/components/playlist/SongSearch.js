import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
function SongSearch({ spotify, playlist, setPlaylist }) {
  const [items, setItems] = useState();
  const handleOnSearch = (string, results) => {
    spotify.searchTracks(string).then(
      (data) => {
        setItems(data.body.tracks.items);
      },
      (err) => {
        console.error(err);
      }
    );
  };
  const formatResult = (item) => {
    return item;
  };

  const handleOnSelect = (item) => {
    let imgUrl;
    if (!item.album.images[0]) {
      imgUrl = "album.png";
    } else {
      imgUrl = item.album.images[0].url;
    }
    const value = {
      uuid: uuidv4(),
      imgUrl,
      spotifyId: item.id,
      name: item.name,
      artist: item.artists[0].name,
      uri: item.uri,
    };
    setPlaylist([...playlist, value]);
  };
  return (
    <div className="flex justify-center w-full">
      <div className="w-3/4 sm:w-2/3 my-7 ">
        <ReactSearchAutocomplete
          className="z-2"
          items={items}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          autoFocus
          formatResult={formatResult}
          placeholder="Add a Song"
        />
      </div>
    </div>
  );
}

export default SongSearch;
