import React, { useEffect } from "react";
import CardMovie from "./CardMovie";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlaying } from "../store/async/movie";

const NowPlaying = () => {
  const nowPlayingState = useSelector((state) => state.movie.nowPlaying);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNowPlaying());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-white text-[20px] md:text-[30px] font-semibold mt-10 mb-5">
        Now Playing
      </h1>
      <div className="flex flex-nowrap text-white items-center p-2 gap-4 md:gap-6 mb-14 overflow-x-auto overflow-y-hidden custom-scrollbar">
        {nowPlayingState.map(({ id, poster_path, title, release_date }) => (
          <CardMovie
            key={id}
            id={id}
            img={"https://image.tmdb.org/t/p/original" + poster_path}
            title={title}
            year={new Date(release_date).getFullYear()}
          />
        ))}
      </div>
    </>
  );
};

export default NowPlaying;
