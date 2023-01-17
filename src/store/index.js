import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../features/auth/authSlice';
import streamReducer from '../features/streams/streamSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    streams: streamReducer,
  },
});

export default store;
