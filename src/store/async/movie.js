import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const urlNowPlaying =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const urlTopRated =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
const urlDetail = (movie_id) =>
  `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
const urlRecommendations = (movie_id) =>
  `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?language=en-US&page=1`;

const options = {
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_ACCESS_TOKEN,
  },
};

const ACCOUNT_ID = import.meta.env.VITE_ACCOUNT_ID;

export const getNowPlaying = createAsyncThunk(
  "movie/getNowPlaying",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(urlNowPlaying, options);

      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTopRated = createAsyncThunk(
  "movie/getTopRated",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(urlTopRated, options);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDetail = createAsyncThunk(
  "movie/getDetail",
  async (movie_id, thunkAPI) => {
    console.log("movie_id", movie_id);
    try {
      const response = await axios.get(urlDetail(movie_id), options);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecommendations = createAsyncThunk(
  "movie/getRecommendations",
  async (movie_id, thunkAPI) => {
    try {
      const response = await axios.get(urlRecommendations(movie_id), options);

      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setFavorite = createAsyncThunk(
  "movie/setFavorite",
  async (movie, thunkAPI) => {
    try {
      const session_id = thunkAPI.getState().auth.session_id;
      console.log(session_id);
      const response = await axios.post(
        `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/favorite`,
        {
          media_type: "movie",
          media_id: movie.id,
          favorite: movie.favorite,
        },
        options
      );
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavorite = createAsyncThunk(
  "movie/getFavorite",
  async (_, thunkAPI) => {
    try {
      const session_id = thunkAPI.getState().auth.session_id;
      const response = await axios.get(
        `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/favorite/movies?`,
        options
      );
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setWatchlist = createAsyncThunk(
  "movie/setWatchlist",
  async (movie, thunkAPI) => {
    try {
      const session_id = thunkAPI.getState().auth.session_id;
      console.log(session_id);
      const response = await axios.post(
        `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/watchlist`,
        {
          media_type: "movie",
          media_id: movie.id,
          watchlist: movie.watchlist,
        },
        options
      );
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWatchlist = createAsyncThunk(
  "movie/getWatchlist",
  async (_, thunkAPI) => {
    try {
      const session_id = thunkAPI.getState().auth.session_id;
      const response = await axios.get(
        `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/watchlist/movies?`,
        options
      );
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchMovies = createAsyncThunk(
  "movie/searchMovies",
  async (searchQuery, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/collection?include_adult=false&language=id-ID&page=1&query=${encodeURIComponent(
          searchQuery
        )}`,
        options
      );
      
      return response.data;
    } catch (error) {
      console.error("Error fetching search results:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
