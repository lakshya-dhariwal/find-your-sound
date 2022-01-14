import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth.js";
import useApi from "../../hooks/useApi.js";
import Nav from "../Nav.js";
import Search from "./Search.js";
import Discover from "./Discover.js";
import Playlist from "./Playlist.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const spotify = useApi(accessToken);
  const [user, setUser] = useState({
    userName: "",
    userId: "",
    image: "avata.png",
  });

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
            <Discover spotify={spotify} />
          </Route>
          <Route path="/playlist">
            <Playlist />
          </Route>
          <Route path="/">
            <Search spotify={spotify} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
