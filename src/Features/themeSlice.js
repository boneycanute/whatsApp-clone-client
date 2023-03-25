import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: { value: "-light" },
  reducers: {
    toggleTheme(state, action) {
      // console.log("Toggle Color Scheme");
      // console.log("Slice State : ", state.value);
      if (state.value === "-light") {
        state.value = "-dark";
      } else {
        state.value = "-light";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
