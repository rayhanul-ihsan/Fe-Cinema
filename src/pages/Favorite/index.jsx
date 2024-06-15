import React from "react";
import { Fav } from "../../moks/Fav";
import ListFav from "../../components/ListFav";
import Navbar from "../../components/Navbar";

const Favorite = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-screen h-auto bg-black py-24 px-24">
        <h1 className="text-white text-[30px] mb-5 font-extrabold">
          Your Favorite Movies
        </h1>
        <div className="flex flex-wrap w-[94%] h-[55%] text-white items-center gap-6 ">
          {Fav.map(({ id, img, title, year }) => (
            <ListFav key={id} img={img} title={title} year={year} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorite;
