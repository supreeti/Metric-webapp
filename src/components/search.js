import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Country } from './country';
import '../App.css';

function RegionDisplay() {
  let { name } = useParams();
  if (name === 'South America' || name === 'North America') {
    name = 'Americas';
  }
  const data = useSelector((state) => state.countries.data);
  const filteredData = data.filter((country) => country.region === name);

  return (
    <section className="allCountry">
      {
            filteredData.map((country) => (
              <div className="coutryName" key={country.area}>
                <Country country={country} />
              </div>
            ))
        }
    </section>
  );
}

function Search() {
  const [results, setResults] = useState('');
  const countries = useSelector((state) => state.countries.data);

  if (results === '') {
    return (
      <section className="searchpageholder">
        <section className="searchField">
          <input type="search" name="search" id="search" placeholder="enter a country..." onChange={(e) => setResults(e.target.value)} />
        </section>
        <span className="emptySearchResult">Search country</span>
      </section>

    );
  }
  return (
    <section className="searchpageholder">
      <section className="searchField">
        <input type="search" name="search" id="search" placeholder="enter a country..." onChange={(e) => setResults(e.target.value)} />
      </section>
      <section className="searchResults">
        {countries.filter((country) => (results.toLowerCase() === '' ? country : country.name.common.toLowerCase().includes(results.toLowerCase()))).map((country) => (<Country key={country.name.common} country={country} />))}
      </section>
    </section>
  );
}

export { RegionDisplay, Search };
