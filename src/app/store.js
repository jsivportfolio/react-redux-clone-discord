// redux powers state management in react
  // data layer around the app (production levele data layer)
  // same pattern as Context API

// reducer 
  // something that listens to actions 
  // we re-render() depending on state if it is listening
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
