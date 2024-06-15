import React from "react";
import Navbar from "../../components/Navbar";
import { Watchs } from "../../moks/Watchs";
import ListWatch from "../../components/ListWatch";

const Watchlist = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-screen h-auto bg-black py-24 px-24">
        <h1 className="text-white text-[30px] mb-5 font-extrabold">
          Your Watchlist
        </h1>
        <div className="flex flex-wrap w-[94%] h-[55%] text-white items-center gap-6 ">
          {Watchs.map(({ id, img, title, year }) => (
            <ListWatch key={id} img={img} title={title} year={year} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Watchlist;
