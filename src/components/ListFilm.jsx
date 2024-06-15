import React, { useState } from "react";
// import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";

const ListFilm = ({ img, title, year }) => {
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
    <div className="w-[150%]">
      <div className="w-[250px] h-[450px] bg-[#050E12] border border-white rounded-lg">
        <div className="relative">
          <img
            src={img}
            alt="img"
            className="w-full h-[380px] object-cover rounded-t-lg"
          />
          <div className="absolute bottom-2 right-2 flex gap-3 px-3 items-end">
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
              <FaHeart size={25} />
            </div>
          </div>
        </div>
        <div className="mt-3 mx-3">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-gray-700">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default ListFilm;
