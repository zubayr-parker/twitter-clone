import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupModalOpen: false,
  loginModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
      state.signupModalOpen = true;
    },
    closeSignupModal: (state) => {
      state.signupModalOpen = false;
    },
    openLoginModal: (state) => {
      state.loginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.loginModalOpen = false;
    },
  },
});

export const {
  openSignupModal,
  closeSignupModal,
  openLoginModal,
  closeLoginModal,
} = modalSlice.actions;

export default modalSlice.reducer;
