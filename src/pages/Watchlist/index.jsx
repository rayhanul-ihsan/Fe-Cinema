import React from "react";
import Navbar from "../../components/Navbar";
import WatchlistComp from "../../components/Watchlist";

const Watchlist = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-screen h-auto bg-black py-24 container mx-auto">
        <WatchlistComp />
      </div>
    </>
  );
};

export default Watchlist;
