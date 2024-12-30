import { useEffect, useContext } from "react";
import { CityContext } from "../CityContext";
import { Link } from "react-router-dom";

function Home() {
  const { cities, setCities } = useContext(CityContext);

  useEffect(() => {
    fetch("http://localhost:5000/city")
      .then((response) => response.json())
      .then((data) => setCities(data));
  }, []);

  let citiesSet = new Set([]);

  function uniqueCities(array, set) {
    array.forEach((element) => set.add(element.name));
  }

  uniqueCities(cities, citiesSet);

  return (
    <header className='p-5' style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image mx-5'
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?t=st=1733392607~exp=1733396207~hmac=67351279a14d4e41057cfda192852d0a0376138ffe0964ce3c962c51a6f6877c&w=1480')",
          height: 800,
          backgroundSize: "contain", // You can change this to 'contain' if you prefer
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        <div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to Where What</h1>
              <h4 className='mb-3'>
                Recommendations for cities around the world
              </h4>
              <div className='mx-auto'>
                {Array.from(citiesSet).map((cityName) => (
                  <Link
                    key={cityName}
                    className='btn btn-outline-light btn-lg mx-2 my-2'
                    to={`/city/${cityName}`}
                  >
                    {cityName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
