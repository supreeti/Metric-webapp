import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Africa from '../assets/images/africa.png';
import Europe from '../assets/images/europe.png';
import Asia from '../assets/images/asia.png';
import NorthAmerica from '../assets/images/north america.png';
import SouthAmerica from '../assets/images/south america.png';
import Oceania from '../assets/images/australia.png';
import Antarctic from '../assets/images/antarctica.png';
import '../App.css';

const imageMap = {
  Africa,
  Europe,
  Asia,
  'North America': NorthAmerica,
  'South America': SouthAmerica,
  Oceania,
  Antarctic,
};

function SingleContinent({ name }) {
  const continentImage = imageMap[name];

  return (
    <div className="continent">
      <Link to={`/details/${name}`}>
        <span className="redirectContinent">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
        </span>
        <h2 className="continentName">{name}</h2>
        <img src={continentImage} alt={`display of the ${name} continent`} className="continentImage" />
      </Link>
      <Outlet />
    </div>
  );
}

SingleContinent.propTypes = {
  name: PropTypes.string.isRequired,
};

function Continents() {
  const allContinents = ['Africa', 'Europe', 'North America', 'South America', 'Asia', 'Oceania', 'Antarctic'];

  return (
    <section className="continents">
      {
                allContinents.map((continent) => (
                  <SingleContinent key={continent} name={continent} />
                ))
            }
      <div>
        Total Population
        <br />
        {allContinents.population}
      </div>
    </section>
  );
}
export default Continents;
