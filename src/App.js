import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { fetchData } from './redux/country/countrySlice';
import Navigation from './components/navigation';
import HomePage from './components/homepage';
import { RegionDisplay, Search } from './components/search';
import { CountryDisplay } from './components/country';
import './App.css';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchData());

  return (
    <div className="appHolder">
      <Navigation />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:name" element={<RegionDisplay />} />
        <Route path="/details/coutries/:name" element={<CountryDisplay />} />
        <Route path="/*" element={<Navigate to="/home" replace />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
