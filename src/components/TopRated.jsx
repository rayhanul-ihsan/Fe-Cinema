import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const TopRated = ({ img, title, year }) => {
  const [isBookmarkClicked, setIsBookmarkClicked] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);


  const handleBookmarkClick = () => {
    if (isBookmarkClicked) {
      setIsBookmarkClicked(false);
    } else {
      setIsBookmarkClicked(true);
    }
  };

  const handleHeartClick = () => {
    if (isHeartClicked) {
      setIsHeartClicked(false);
    } else {
      setIsHeartClicked(true);
    }
  };
  return (
    // <div className="w-[150%]">
    <div className="flex-[0_1] min-w-[14rem] bg-[#050E12] border border-white rounded-lg flex flex-col overflow-hidden">
      <div className="relative group h-4/5 overflow-hidden" >
        <NavLink to={"/detail"}>
          <div className="mb-0 pb-0 cursor-pointer">
            <img
              src={img}
              alt="img"
              className="w-full object-cover h-full "
            />
          </div>
        </NavLink>
        <div className="absolute w-full bottom-2 h-[70px] flex gap-3 px-3 items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out  justify-end">
          <div
            onClick={handleBookmarkClick}
            className={`cursor-pointer hover:text-white ${
              isBookmarkClicked ? "text-white" : "text-gray-400"
            }`}
          >
            <IoBookmark size={25} />
          </div>
          <div
            onClick={handleHeartClick}
            className={`cursor-pointer hover:text-white ${
              isHeartClicked ? "text-white" : "text-gray-400"
            }`}
          >
            <FaRegHeart size={25} />
          </div>
        </div>
      </div>
      <div className="mt-3 mx-3 h-1/5">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-gray-700">{year}</p>
      </div>
    </div>
    // </div>
  );
};

export default TopRated;
