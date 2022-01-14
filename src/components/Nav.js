import React from "react";
import { Link } from "react-router-dom";

function Nav({ user }) {
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
      <div className=""></div>
    </>
  );
}

export default Nav;
