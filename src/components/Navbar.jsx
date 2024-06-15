import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center py-4 px-24 bg-[#0EA5E9]">
      <NavLink to={"/"}>
        <h1 className="text-white text-[25px] font-extrabold">C I N E M A</h1>
      </NavLink>

      <div className="flex items-center cursor-pointer text-[20px] text-white gap-4">
        <NavLink to={"/favorite"}>
          <p className="hover:underline hover:text-black">Favorite</p>
        </NavLink>
        <NavLink to={"/watchlist"}>
          <p className="hover:underline hover:text-black">Watchlist</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
