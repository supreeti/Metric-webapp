import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: '',
  data: [],
};

export const fetchData = createAsyncThunk(
  'regions/fetchRegionalData',
  async () => {
    const request = await axios.get('https://restcountries.com/v3.1/all');
    const responce = await request.data;
    return responce;
  },
);

const countrySlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default countrySlice.reducer;
