import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Nav({ user }) {
  return (
    <>
      <div className="text flex items-center  justify-between ">
        <div className="flex items-center ">
          <img
            src="record.png"
            width={40}
            alt="record logo"
            className="animate-spin p-2"
          />
          <h1 className="invisible sm:visible">Find Your Sound</h1>
        </div>
        <div className=" flex items-center text-sm ">
          <img
            src={user.images}
            className="rounded-full "
            alt="profile picture"
            width={25}
          />
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
