import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth.js";
import useApi from "../../hooks/useApi.js";
import Nav from "../Nav.js";
import Search from "./Search.js";
import Discover from "./Discover.js";
import Playlist from "./Playlist.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Dashboard({ code }) {
  //custom hooks
  const accessToken = useAuth(code);
  const spotify = useApi(accessToken);
  //states
  const [user, setUser] = useState({
    userName: "",
    userId: "",
    image: "avatar.png",
  });
  const [discoverPlaylist, setDiscoverPlaylist] = useState();

  useEffect(() => {
    if (!accessToken) {
      console.log("empty access token");
      return;
    }
    spotify.getMe().then(
      (data) => {
        let img = "avatar.png";
        if (data.body.images[0].url) {
          img = data.body.images[0].url;
        }
        setUser({
          name: data.body.display_name,
          id: data.body.id,
          image: img,
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
          <Route path="/discover/:id">
            <Discover spotify={spotify} discoverPlaylist={discoverPlaylist} />
          </Route>
          <Route path="/playlist">
            <Playlist />
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
