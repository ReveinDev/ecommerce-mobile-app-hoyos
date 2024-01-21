import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      (state.user = action.payload.email),
        (state.token = action.payload.idToken);
    },
    removeUser: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
