import React from "react";
import { useSelector } from "react-redux";

const useCheckFav = (id) => {
  const [check, setCheck] = React.useState(false);
  const favState = useSelector((state) => state.movie.favorite);

  React.useEffect(() => {
    const checked = Boolean(favState.find((movie) => movie.id === id));
    setCheck(checked);
  }, [favState, id]);

  return [check];
};

export default useCheckFav;
