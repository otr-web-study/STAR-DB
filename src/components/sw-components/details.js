import { useContext } from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceContext } from "../../contexts";


const PersonDetails = (props) => {
  const { getPerson, getPersonImage } = useContext(SwapiServiceContext);

  return (
    <ItemDetails
      getData={getPerson}
      getImageUrl={getPersonImage}
      {...props}>
      <Record field='gender' label='Gender' />
      <Record field='birthYear' label='Birth Year' />
      <Record field='eyeColor' label='Eye Color' />
    </ItemDetails>
  );
};

const PlanetDetails = (props) => {
  const { getPlanet, getPlanetImage } = useContext(SwapiServiceContext);

  return (
    <ItemDetails
      getData={getPlanet}
      getImageUrl={getPlanetImage}
      {...props}>
      <Record field='population' label='Population' />
      <Record field='rotationPeriod' label='Rotation Period' />
      <Record field='diameter' label='Diameter' />
    </ItemDetails>
  );
}

const StarshipDetails = (props) => {
  const { getStarship, getStarshipImage } = useContext(SwapiServiceContext);
  
  return (
    <ItemDetails
      getData={getStarship}
      getImageUrl={getStarshipImage}
      {...props}>
      <Record field='model' label='Model' />
      <Record field='manufacturer' label='Manufacturer' />
      <Record field='crew' label='Crew' />
      <Record field='passengers' label='Passengers' />
    </ItemDetails>
  );
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}