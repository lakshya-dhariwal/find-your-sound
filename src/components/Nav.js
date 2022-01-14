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
          <h1 className="">Find Your Sound</h1>
        </div>
        <div className=" flex items-center text-sm ">
          <img
            src={user.images}
            className="rounded-full "
            alt="profile picture"
            width={25}
          />
          <h3 className="px-2">{user.name}</h3>
        </div>
      </div>
      <div className=""></div>
    </>
  );
}

export default Nav;
