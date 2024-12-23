import Map from "../components/Map";
import RecommendationTable from "../components/RecommendationTable";
import { useState, useEffect } from "react";

import PropTypes from "prop-types";

function City({ city_name, latitude, longitude }) {
  const [recommendations, setRecommendations] = useState([]);

  // API call to get recommendations
  useEffect(() => {
    fetch("http://localhost:5000/recommendation")
      .then((response) => response.json())
      .then((data) => setRecommendations(data));
  }, []);

  return (
    <>
      <h1>{city_name ? city_name : "City name"}</h1>
      <Map latitude={latitude} longitude={longitude} />
      <RecommendationTable recommendations={recommendations} />
    </>
  );
}

City.propTypes = {
  city_name: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
};

export default City;
