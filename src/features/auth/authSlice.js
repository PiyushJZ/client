import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignedIn: false,
  userId: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isSignedIn = true;
      state.userId = action.payload;
    },
    signOut: (state) => {
      state.isSignedIn = false;
      state.userId = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
