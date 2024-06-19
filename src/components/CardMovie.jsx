import React, { useState } from "react";
import { FaBookmark, FaHeart, FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useCheckFav from "../hooks/checkFav";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_POPUP } from "../store/slices/auth";
import {
  getFavorite,
  getWatchlist,
  setFavorite,
  setWatchlist,
} from "../store/async/movie";
import useCheckWatch from "../hooks/checkWatch";

const CardMovie = ({ id, img, title, year }) => {
  const isLogin = useSelector((state) => state.auth.session_id); 
  const dispatch = useDispatch();

  const [isWatch] = useCheckWatch(id);
  const [isFav] = useCheckFav(id);

  const handleWatchlistClick = async () => {
    if (!isLogin) {
      return dispatch(TOGGLE_POPUP(true));
    }
    if (isWatch) {
      await dispatch(setWatchlist({ id, watchlist: false }));
    } else {
      await dispatch(setWatchlist({ id, watchlist: true }));
    }
    await dispatch(getWatchlist());
  };

  const handleFavoriteClick = async () => {
    if (!isLogin) {
      return dispatch(TOGGLE_POPUP(true));
    }
    if (isFav) {
      await dispatch(setFavorite({ id, favorite: false }));
    } else {
      await dispatch(setFavorite({ id, favorite: true }));
    }

    await dispatch(getFavorite());
  };

  return (
    <div
      className="flex-[0_1] min-w-[10rem] md:min-w-[14rem] bg-[#050E12] rounded-lg flex flex-col overflow-hidden"
      title={title}
    >
      <div className="relative group h-4/5 overflow-hidden">
        <NavLink to={`/detail/${id}`}>
          <div className="mb-0 pb-0 cursor-pointer">
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="w-full object-cover h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>
        </NavLink>
        <div className="absolute w-full bottom-2 h-[70px] flex gap-3 px-3 items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out justify-end">
          <div onClick={handleWatchlistClick} className="cursor-pointer">
            {isWatch ? (
              <FaBookmark size={25} className="text-white" />
            ) : (
              <FaRegBookmark size={25} className="text-white" />
            )}
          </div>
          <div onClick={handleFavoriteClick} className="cursor-pointer">
            {isFav ? (
              <FaHeart size={25} className="text-white" />
            ) : (
              <FaRegHeart size={25} className="text-white" />
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 mx-3 h-[5rem]">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-gray-700">{year}</p>
      </div>
    </div>
  );
};

export default CardMovie;
