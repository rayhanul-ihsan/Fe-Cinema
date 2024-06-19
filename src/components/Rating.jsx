import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { rateMovie } from "../store/async/movie";
import { TOGGLE_POPUP } from "../store/slices/auth";

const Rating = ({ movie_id }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.session_id);
  const userRating = useSelector((state) => state.movie.detail.userRating);
  const [rating, setRating] = useState(userRating || 0);
  const [hover, setHover] = useState(0);

  const handleRating = async (newRating) => {
    if (!isLogin) {
        dispatch(TOGGLE_POPUP(true));
        return;
    }
    setRating(newRating);
    await dispatch(rateMovie({ movie_id, rating: newRating }));
  };

  return (
    <div className="rating">
      {[...Array(10)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => handleRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <FaStar className="star" />
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
