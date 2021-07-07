// appSlice

import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelID: null,
    channelName: null,
  },
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelID = action.payload.channelID;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelID = (state) => state.app.ChannelID;
export const selectChannelName = (state) => state.app.ChannelName;

export default appSlice.reducer;
