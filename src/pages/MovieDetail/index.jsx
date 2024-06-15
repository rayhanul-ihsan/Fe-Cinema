import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ListFilm from "../../components/ListFilm";
import { card } from "../../moks/card";
import { BsDot } from "react-icons/bs";
import { IoBookmark } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const MovieDetail = () => {
  const [isBookmarkClicked, setIsBookmarkClicked] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarkClicked(!isBookmarkClicked);
  };

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <>
      <Navbar />
      <div
        className="relative w-screen h-[500px] flex items-center bg-cover bg-center p-28 gap-8"
        style={{ backgroundImage: `url('/img3.png')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="https://i.ibb.co.com/6WZbJR3/img-2.png"
          alt="img2"
          className="relative w-[150px] h-[250px] object-cover"
        />
        <div className="relative">
          <h1 className="text-white text-[30px] font-semibold">
            Oppenheimer (2023)
          </h1>
          <div className="flex items-center mb-4 text-white">
            <p>07/19/2023</p>
            <BsDot />
            <p>Drama, History</p>
            <BsDot />
            <p>3h 1m</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-white rounded-full p-1">
              <CircularProgressbar
                value={82}
                text={82}
                strokeWidth={12}
                
                styles={{
                  background: {
                    fill: "rgba(0, 0, 0, 0.5)",
                  },
                  text:{
                    fontSize: "3rem",
                    strokeWidth: "10px",
                    fontWeight:"bold"
                  }
                }}
              />
            </div>
            <p className="text-white text-sm">User <br /> Score</p>

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
          <p className="text-white italic mt-2">The world forever changes.</p>
          <h2 className="text-white font-semibold">Overview</h2>
          <p className="text-white">
            The story of J. Robert Oppenheimer's role in the development of the
            atomic bomb during World War II.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-screen h-auto bg-black py-24 px-24">
        <h1 className="text-white text-[30px] font-extrabold mb-5">
          Recommendations
        </h1>
        <div className="flex flex-nowrap w-[94%] h-[55%] text-white items-center gap-6 mb-14 overflow-x-auto overflow-y-hidden custom-scrollbar">
          {card.map(({ id, img, title, year }) => (
            <ListFilm key={id} img={img} title={title} year={year} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
