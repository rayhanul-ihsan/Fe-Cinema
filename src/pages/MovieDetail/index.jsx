import React, { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { BsDot } from "react-icons/bs";
import { FaBookmark, FaHeart, FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Recommendation from "../../components/Recommendation";
import useCheckFav from "../../hooks/checkFav";
import useCheckWatch from "../../hooks/checkWatch";
import {
  getDetail,
  getFavorite,
  getWatchlist,
  rateMovie,
  setFavorite,
  setWatchlist,
} from "../../store/async/movie";
import { TOGGLE_POPUP } from "../../store/slices/auth";

const MovieDetail = () => {
  const { movie_id } = useParams();
  const isLogin = useSelector((state) => state.auth.session_id);

  const DetailState = useSelector((state) => state?.movie?.detail);
  const dispatch = useDispatch();

  const [isWatch] = useCheckWatch(+movie_id);
  const [isFav] = useCheckFav(+movie_id);

  useEffect(() => {
    if (movie_id) {
      dispatch(getDetail(movie_id));
    }
  }, [dispatch, movie_id]);

  const handleWatchlistClick = async () => {
    if (!isLogin) {
      return dispatch(TOGGLE_POPUP(true));
    }
    if (isWatch) {
      await dispatch(setWatchlist({ id: +movie_id, watchlist: false }));
    } else {
      await dispatch(setWatchlist({ id: +movie_id, watchlist: true }));
    }
    await dispatch(getWatchlist());
  };

  const handleFavoriteClick = async () => {
    if (!isLogin) {
      return dispatch(TOGGLE_POPUP(true));
    }
    if (isFav) {
      await dispatch(setFavorite({ id: +movie_id, favorite: false }));
    } else {
      await dispatch(setFavorite({ id: +movie_id, favorite: true }));
    }

    await dispatch(getFavorite());
  };

  const handleRateMovie = async (rating) => {
    if (!isLogin) {
      return dispatch(TOGGLE_POPUP(true));
    }
    await dispatch(rateMovie({ movie_id: +movie_id, rating }));
  };

  return (
    <>
      <Navbar />
      <div
        className="relative w-screen h-[500px] flex items-center bg-cover bg-center "
        style={{
          backgroundImage: `url(${
            DetailState.backdrop_path
              ? `https://image.tmdb.org/t/p/original${DetailState.backdrop_path}`
              : "/img3.png"
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="flex items-center gap-8 container m-auto">
          {DetailState.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${DetailState.poster_path}`}
              alt="Movie Poster"
              className="relative w-[150px] h-[250px] object-cover"
            />
          )}
          <div className="relative">
            <h1 className="text-white text-[30px] font-semibold">
              {DetailState.title} ({DetailState.release_date?.split("-")[0]})
            </h1>
            <div className="flex items-center mb-4 text-white">
              <p>{DetailState.release_date}</p>
              <BsDot />
              <p>{DetailState.genres?.map((genre) => genre.name).join(", ")}</p>
              <BsDot />
              <p>
                {Math.floor(DetailState.runtime / 60)}h{" "}
                {DetailState.runtime % 60}m
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-white rounded-full p-1">
                <CircularProgressbar
                  value={DetailState.vote_average * 10}
                  text={Math.round(DetailState.vote_average * 10)}
                  strokeWidth={12}
                  styles={{
                    background: {
                      fill: "rgba(0, 0, 0, 0.5)",
                    },
                    text: {
                      fontSize: "3rem",
                      strokeWidth: "10px",
                      fontWeight: "bold",
                    },
                  }}
                />
              </div>
              <p className="text-white text-sm">
                User <br /> Score
              </p>

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
            <p className="text-white italic mt-2">{DetailState.tagline}</p>
            <h2 className="text-white font-semibold">Overview</h2>
            <p className="text-white">{DetailState.overview}</p>

            <div className="mt-4">
              <h3 className="text-white font-semibold">Rate this movie:</h3>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleRateMovie(rating)}
                  className="px-2 py-1 mx-1 bg-gray-700 text-white rounded"
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container my-10 mx-auto">
        <Recommendation />
      </div>
    </>
  );
};

export default MovieDetail;
