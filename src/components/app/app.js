import { SwapiServiceContext } from '../../contexts'
import SwapiService from '../../services/swapi-service';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import ErrorBoundary from '../error-boundary/error-boundary';

import './app.css';

const swapiservice = new SwapiService();


const App = () => {

  return (
    <div>
      <ErrorBoundary>
        <Header />
        <SwapiServiceContext.Provider value={swapiservice}>
          <RandomPlanet />
          <PeoplePage />
          <StarshipPage />
          <PlanetPage />
        </SwapiServiceContext.Provider>
      </ErrorBoundary>
    </div>
  );
};

export default App;