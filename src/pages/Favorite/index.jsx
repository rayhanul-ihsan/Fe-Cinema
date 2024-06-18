import React from "react";
import Navbar from "../../components/Navbar";
import TopRated from "../../components/CardMovie";
import FavoriteComp from "../../components/Favorite";

const Favorite = () => {
  return (
    <>
      <Navbar />
        <div className="flex flex-col w-screen h-auto bg-black py-24 container mx-auto">
        <FavoriteComp/>
      </div>
    </>
  );
};

export default Favorite;
