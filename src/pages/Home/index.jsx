import React from "react";
import Navbar from "../../components/Navbar";
import ListFilm from "../../components/ListFilm";
import { card } from "../../moks/card";
import "../../index.css";
import { Top } from "../../moks/Top";
import TopRated from "../../components/TopRated";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-screen h-auto bg-black container mx-auto">
        <h1 className="text-white text-[30px] font-extrabold mb-5">Now Playing</h1>
        <div className="flex flex-nowrap w-[94%] h-[55%] text-white items-center gap-6 mb-14 overflow-x-auto overflow-y-hidden custom-scrollbar">
          {card.map(({ id, img, title, year }) => (
            <ListFilm key={id} img={img} title={title} year={year} />
          ))}
        </div>
        <h1 className="text-white text-[30px] font-extrabold mb-5">Top Rated</h1>
        <div className="flex flex-wrap text-white items-center gap-6 ">
          {Top.map(({ id, img, title, year }) => (
            <TopRated key={id} img={img} title={title} year={year} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
