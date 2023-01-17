import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import mapKeys from 'lodash/mapKeys';
import streams from '../../apis/streams';

const initialState = {};

export const createStream = createAsyncThunk(
  'streams/createStream',
  async (formValues, thunkAPI) => {
    const { userId } = thunkAPI.getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });
    return response.data;
  }
);

export const deleteStream = createAsyncThunk(
  'streams/deleteStream',
  async (id) => {
    await streams.delete(`/streams/${id}`);
    return id;
  }
);

export const editStream = createAsyncThunk(
  'streams/editStream',
  async ({ id, ...formValues }) => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    return response.data;
  }
);

export const fetchStreams = createAsyncThunk(
  'streams/fetchStreams',
  async () => {
    const response = await streams.get('/streams');
    return response.data;
  }
);

export const fetchStream = createAsyncThunk(
  'streams/fetchStream',
  async (id) => {
    const response = await streams.get(`/streams/${id}`);
    return response.data;
  }
);

export const streamSlice = createSlice({
  name: 'streams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createStream.fulfilled, (state, action) => {
      state[action.payload.id] = action.payload;
    });

    builder.addCase(fetchStream.fulfilled, (state, action) => {
      state[action.payload.id] = action.payload;
    });

    builder.addCase(editStream.fulfilled, (state, action) => {
      state[action.payload.id] = action.payload;
    });

    builder.addCase(deleteStream.fulfilled, (state, action) => {
      delete state[action.payload.id];
    });

    builder.addCase(fetchStreams.fulfilled, (state, action) => {
      return mapKeys(action.payload, 'id');
    });
  },
});

export default streamSlice.reducer;
