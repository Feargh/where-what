import Map from "../components/Map";
import RecommendationTable from "../components/RecommendationTable";

function City({ city_name, latitude, longitude }) {
  return (
    <>
      <h1>{city_name ? city_name : "City name"}</h1>
      <Map latitude={latitude} longitude={longitude} />
      <RecommendationTable />
    </>
  );
}

export default City;
