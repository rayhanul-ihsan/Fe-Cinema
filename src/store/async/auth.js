import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.themoviedb.org/3/authentication/guest_session/new";
const urlDelete = "https://api.themoviedb.org/3/authentication/session";

const options = {
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_ACCESS_TOKEN,
  },
};

export const getGuestSession = createAsyncThunk(
  "auth/getGuestSession",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url, options);

      localStorage.setItem("token", response.data.guest_session_id);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteGuestSession = createAsyncThunk(
  "auth/deleteGuestSession",
  async (_, thunkAPI) => {
    try {
      await axios.delete(urlDelete, options);
      localStorage.removeItem("token");
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
