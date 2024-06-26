import { createSlice } from "@reduxjs/toolkit";
import { getGuestSession } from "../async/auth";

const initialState = {
  session_id: null,
  show_popup: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    TOGGLE_POPUP: (state, action) => {
      state.show_popup = action.payload;
    },
    LOGOUT: (state) => {
      state.session_id = null;
    },  
  },
  extraReducers: (builder) => {
    builder.addCase(getGuestSession.fulfilled, (state, action) => {
      state.session_id = action.payload.guest_session_id;
    });

  },
});
export const { TOGGLE_POPUP, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
