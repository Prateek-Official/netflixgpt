import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null, // when there are no users
  reducers: {
    addUser: (state, action) => {
      return action.payload; //will add user details in intialState
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer