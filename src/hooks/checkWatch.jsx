import React from "react";
import { useSelector } from "react-redux";

const useCheckWatch = (id) => {
  const [check, setCheck] = React.useState(false);
  const watchState = useSelector((state) => state.movie.watchlist);

  React.useEffect(() => {
    const iswatchlist = Boolean(watchState.find((movie) => movie.id === id));
    setCheck(iswatchlist);
  }, [watchState, id]);

  return [check];
};

export default useCheckWatch;
