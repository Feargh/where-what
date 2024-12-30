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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>City Not Found</h1>
      <p>
        Oops! We couldn't find the city you were looking for. It might not be in
        our database yet.
      </p>
      <p>
        Please check the city name and try again, or return to the
        <a href='/'>homepage</a>.
      </p>
    </div>
  );
}

export default CityPage;
