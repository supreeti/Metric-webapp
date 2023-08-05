import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countrySlice';

const Store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default Store;
