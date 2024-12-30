import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CityContext } from "../CityContext";
import City from "./City";

function CityPage() {
  const { cities } = useContext(CityContext);
  const { cityName } = useParams();

  const cityData = cities.find((city) => city.name === cityName);

  return cityData ? (
    <City
      city_name={cityData.name}
      city_id={cityData.id}
      latitude={cityData.latitude}
      longitude={cityData.longitude}
    />
  ) : (
    <h1>Oh no</h1>
  );
}

export default CityPage;
