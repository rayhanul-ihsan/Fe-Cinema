import React from "react";
import Navbar from "../../components/Navbar";
import NowPlaying from "../../components/NowPlaying";
import TopRated from "../../components/TopRated";
import "../../index.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-screen h-auto bg-black container mx-auto px-4 md:px-0">
        <NowPlaying />
        <TopRated />
      </div>
    </>
  );
};

export default Home;
