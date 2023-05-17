import { createSlice } from "@reduxjs/toolkit";
import { OFF_SET_LIMIT } from "./constants";

const chatSlice = createSlice({
  name: "ChatSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, actions) => {
      state.messages.splice(OFF_SET_LIMIT, 1);
      state.messages.unshift(actions.payload);
    },
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
