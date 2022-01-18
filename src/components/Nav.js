import React from "react";
import { Link } from "react-router-dom";

function Nav() {
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
                className="animate-spin"
              />
            </div>
            <h1 className="invisible sm:visible">Find Your Sound</h1>
          </div>
        </Link>

        <div className=" flex items-center w-16 text-xs sm:text-sm justify-between">
          <span>
            <img
              src="avatar.png"
              className="rounded-full border border-slate-900 "
              width={25}
              alt=""
            />
          </span>
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
            <img src="playlist.svg" className="px-1" width={30} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Nav;
