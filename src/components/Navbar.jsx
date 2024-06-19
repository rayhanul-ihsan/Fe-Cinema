import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGOUT, TOGGLE_POPUP } from "../store/slices/auth";

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.session_id);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    if (!isLogin) {
      return dispatch(TOGGLE_POPUP(true));
    }
  };

  const handleLogout = () => {
    dispatch(LOGOUT())
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen bg-[#0EA5E9]">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <NavLink to={"/"}>
          <h1 className="text-white text-[25px] font-extrabold hover:text-black">
            C I N E M A
          </h1>
        </NavLink>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-[25px]">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`flex-col md:flex-row md:flex items-center md:static absolute top-[64px] left-0 w-full md:w-auto bg-[#0EA5E9] md:bg-transparent transition-all duration-300 ease-in ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <NavLink
            onClick={handleLogin}
            to={"/search"}
            className="block md:inline-block px-4 py-2 md:py-0 hover:underline hover:text-black text-[20px] text-white"
          >
            Search
          </NavLink>
          <NavLink
            onClick={handleLogin}
            to={"/favorite"}
            className="block md:inline-block px-4 py-2 md:py-0 hover:underline hover:text-black text-[20px] text-white"
          >
            Favorite
          </NavLink>
          <NavLink
            onClick={handleLogin}
            to={"/watchlist"}
            className="block md:inline-block px-4 py-2 md:py-0 hover:underline hover:text-black text-[20px] text-white"
          >
            Watchlist
          </NavLink>
          {localStorage.getItem("token") && (
            <button onClick={handleLogout} className="text-white text-[25px]">
              <CiLogout />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
