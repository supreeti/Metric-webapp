import PropTypes from 'prop-types';
import '../App.css';
import {
  useParams, Navigate, Link, Outlet,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

function CountryDisplay() {
  const { name } = useParams();
  const countries = useSelector((state) => state.countries.data);
  const selected = countries.filter((country) => country.name.common === name)[0];

  if (!selected) {
    return <Navigate to="/home" replace />;
  }

  return (
    <section className="countryInfo">
      <span className="countryName">{selected.name.common}</span>
      {selected.flags && <img src={selected.flags.png} alt={selected.flags.alt} className="countryImage" />}
      {selected.area && (
        <>
          <span className="AreaCode">Country Code</span>
          <p className="AreaCodeData">{selected.area}</p>
        </>
      )}
      {selected.name.official && (
        <section className="property">
          <span className="propHeader">Official Name</span>
          <p className="selectedPosition">{selected.name.official}</p>
        </section>
      )}
      {selected.population && (
        <section className="property">
          <span className="propHeader">Population</span>
          <p className="selectedPosition">{selected.population}</p>
        </section>
      )}
      {selected.region && (
        <section className="property">
          <span className="propHeader">Continent</span>
          <p className="selectedPosition">{selected.region}</p>
        </section>
      )}
      {selected.unMember && (
        <section className="property">
          <span className="propHeader">UN Membership</span>
          <p className="selectedPosition">Active</p>
        </section>
      )}
    </section>
  );
}

function Country({ country }) {
  return (
    <>
      <Link to={`/details/coutries/${country.name.common}`}>
        <span className="countryName">{country.name.common}</span>
        {country.flags.png && <img src={country.flags.png} alt={country.flags.alt} className="countryFlag" />}
      </Link>
      <Outlet />
    </>
  );
}
Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
      official: PropTypes.string.isRequired,
    }).isRequired,
    region: PropTypes.string.isRequired,
    subregion: PropTypes.string,
    area: PropTypes.number.isRequired,
    capital: PropTypes.arrayOf(PropTypes.string),
    flags: PropTypes.shape({
      alt: PropTypes.string,
      png: PropTypes.string,
      svg: PropTypes.string,
    }),
    language: PropTypes.string,
    population: PropTypes.number,
    startOfWeek: PropTypes.string,
  }).isRequired,
};

export { CountryDisplay, Country };
