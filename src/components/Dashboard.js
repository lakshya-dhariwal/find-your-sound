import React, { useState, useEffect } from "react";
import useAuth from "../Hooks/useAuth.js";
import useApi from "../Hooks/useApi.js";
import Nav from "./Nav.js";
import Search from "./Search.js";
import Discover from "./Discover.js";
import Playlist from "./Playlist.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const spotify = useApi(accessToken);

  useEffect(() => {
    if (!accessToken) {
      console.log("empty access token");
      return;
    }

    // Get Elvis' albums TEST
    spotify.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE").then(
      (data) => {
        console.log("Artist albums", data.body);
      },
      (err) => {
        console.error(err);
      }
    );
    
  }, [accessToken]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/">
            <Search spotify={spotify} />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/playlist">
            <Playlist />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
