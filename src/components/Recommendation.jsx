import React, { useEffect } from "react";
import CardMovie from "./CardMovie";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendations } from "../store/async/movie";
import { useParams } from "react-router-dom";

const Recommendation = () => {
  const { movie_id } = useParams();
  const recommendationState = useSelector((state) => state.movie.recommendations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movie_id) {
      dispatch(getRecommendations(movie_id));
    }
  }, [dispatch, movie_id]);
  return (
    <>
      <h1 className="text-white text-[20px] md:text-[30px] font-semibold">
        Recommendations
      </h1>
      <div className="flex flex-nowrap text-white items-center p-2 gap-4 md:gap-6 mb-14 overflow-x-auto overflow-y-hidden custom-scrollbar">
        {recommendationState.map(
          ({ id, poster_path, title, release_date }) => (
            <CardMovie
              key={id}
              id={id}
              img={"https://image.tmdb.org/t/p/original" + poster_path}
              title={title}
              year={new Date(release_date).getFullYear()}
            />
          )
        )}
      </div>
    </>
  );
};

export default Recommendation;
