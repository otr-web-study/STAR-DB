import { useContext } from "react";

import ItemList from "../item-list";
import { SwapiServiceContext } from "../../contexts";


const renderName = ({ name }) => name;
const renderModelAndName = ({ model, name}) => `${name} (${model})`;
const renderClassAndName = ({ vehicleClass, name}) => `${name} (${vehicleClass})`;

const PersonList = (props) => {
  const { getAllPeople } = useContext(SwapiServiceContext);

  return (
    <ItemList 
      renderItem={renderName}
      getData={getAllPeople}
      {...props} />
  )
}

const PlanetList = (props) => {
  const { getAllPlanets } = useContext(SwapiServiceContext);

  return (
    <ItemList
      renderItem={renderName}
      getData={getAllPlanets}
      {...props} />
  );
}

const StarshipList = (props) => {
  const { getAllStarships } = useContext(SwapiServiceContext);
  
  return (
    <ItemList
      renderItem={renderModelAndName}
      getData={getAllStarships}
      {...props} />
  );
}

const VehicleList = (props) => {
  const { getAllVehicles } = useContext(SwapiServiceContext);

  return (
    <ItemList
      renderItem={renderClassAndName}
      getData={getAllVehicles}
      {...props} />
  )
}

export {
  PersonList,
  PlanetList,
  StarshipList,
  VehicleList,
}