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
  const [user, setUser] = useState({ userName: "", userId: "" });

  useEffect(() => {
    if (!accessToken) {
      console.log("empty access token");
      return;
    }

    spotify.getMe().then(
      (data) => {
        console.log("Me", data.body);
        setUser({
          name: data.body.display_name,
          id: data.body.id,
          images: data.body.images[0].url,
        });
      },
      (err) => {
        console.error(err);
      }
    );
  }, [accessToken]);

  return (
    <>
      <BrowserRouter>
        <Nav user={user} />
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
