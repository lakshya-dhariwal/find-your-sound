import React, { useState } from "react";
import useAuth from "../../hooks/useAuth.js";
import useApi from "../../hooks/useApi.js";
import Nav from "../Nav.js";
import Search from "../search/Search.js";
import Discover from "../discover/Discover.js";
import Playlist from "../playlist/Playlist.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Dashboard({ code }) {
  //custom hooks
  const accessToken = useAuth(code);
  const spotify = useApi(accessToken);
  //states

  const [discoverPlaylist, setDiscoverPlaylist] = useState();
  const [playlist, setPlaylist] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/discover">
            <Discover
              spotify={spotify}
              discoverPlaylist={discoverPlaylist}
              playlist={playlist}
              setPlaylist={setPlaylist}
            />
          </Route>
          <Route path="/playlist">
            <Playlist
              spotify={spotify}
              playlist={playlist}
              setPlaylist={setPlaylist}
            />
          </Route>
          <Route path="/">
            <Search
              spotify={spotify}
              setDiscoverPlaylist={setDiscoverPlaylist}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
