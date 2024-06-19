import { createSlice } from "@reduxjs/toolkit";
import {
  getDetail,
  getFavorite,
  getNowPlaying,
  getRecommendations,
  getTopRated,
  getWatchlist,
  rateMovie,
  searchMovies,
  setWatchlist,
} from "../async/movie";

const initialState = {
  nowPlaying: [],
  topRated: [],
  detail: {},
  recommendations: [],
  favorite: [],
  watchlist: [],
  search: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNowPlaying.fulfilled, (state, action) => {
      state.nowPlaying = action.payload.results;
    });

    builder.addCase(getTopRated.fulfilled, (state, action) => {
      state.topRated = action.payload.results;
    });

    builder.addCase(getDetail.fulfilled, (state, action) => {
      state.detail = action.payload;
    });

    builder.addCase(getRecommendations.fulfilled, (state, action) => {
      state.recommendations = action.payload.results;
    });

    builder.addCase(getFavorite.fulfilled, (state, action) => {
      state.favorite = action.payload.results;
    });

    builder.addCase(getWatchlist.fulfilled, (state, action) => {
      state.watchlist = action.payload.results;
    });

    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.search = action.payload.results;
    });

    builder.addCase(rateMovie.fulfilled, (state, action) => {
      const { movie_id, rating } = action.payload;
      if (state.detail.id === movie_id) {
        state.detail.userRating = rating;
      }
    });
  },
});

export default movieSlice.reducer;
