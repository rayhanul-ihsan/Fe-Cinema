import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchlist } from "../store/async/movie";
import CardMovie from "./CardMovie";2

const WatchlistComp = () => {
  const watchState = useSelector((state) => state.movie.watchlist);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getWatchlist());
  }, []);
  return (
    <>
      <h1 className="text-white text-[20px] md:text-[30px] font-semibold m-5">
        Your Watchlist
      </h1>
      <div className="flex flex-wrap justify-center md:justify-normal text-white p-2 items-center gap-4 md:gap-8">
        {watchState.map(({ id, poster_path, title, release_date }) => (
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

export default WatchlistComp;
