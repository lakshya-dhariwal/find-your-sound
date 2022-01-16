import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav({ user, total }) {
  return (
    <>
      <div className="text flex items-center  justify-between">
        <Link to="/">
          <div className="flex items-center">
            <div className="p-2">
              <img
                src="record.png"
                width={40}
                alt="record logo"
                className="animate-spin "
              />
            </div>
            <h1 className="invisible sm:visible">Find Your Sound</h1>
          </div>
        </Link>

        <div className=" flex items-center text-xs sm:text-sm">
          <span>
            {user.image ? (
              <img
                src={user.image}
                className="rounded-full border border-slate-900"
                width={25}
              />
            ) : (
              ""
            )}
          </span>
          <h3 className="px-2">{user.name}</h3>
          <a href="/">
            <img
              src="logout.svg"
              className="cursor-pointer"
              width={15}
              alt="logout"
            />
          </a>
        </div>
      </div>
      <div className="text-slate-100 absolute right-2">
        <Link to="/playlist">
          <div className="flex items-center">
            <h2 className="">Playlist</h2>
            <img src="playlist.svg" className="px-1" width={30} />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Nav;
