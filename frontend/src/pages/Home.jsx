import City from "./City";

function Home() {
  let recommendations = [
    {
      city_name: "Dublin",
      recommendation_name: "The Stag's Head",
      type: "Pub",
      comment: "Victorian red brick pub with great atmosphere",
      latitude: 53.343835,
      longitude: -6.263736,
    },
    {
      city_name: "London",
      recommendation_name: "Shack-Fuyu Soho",
      type: "Japanese restaurant",
      comment: "Delicious Japanese food, don't miss the matcha french toast",
      latitude: 51.513666,
      longitude: -0.130055,
    },
    {
      city_name: "Lisbon",
      recommendation_name: "Pastéis de Belém",
      type: "Pastry shop",
      comment: "Best Pastel de Nata",
      latitude: 38.69736,
      longitude: -9.203333,
    },
  ];

  let cities = new Set([]);

  function uniqueCities(array, set) {
    array.forEach((element) => set.add(element.city_name));
  }

  uniqueCities(recommendations, cities);

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
                {Array.from(cities).map((c, index) => (
                  <a
                    key={index}
                    className='btn btn-outline-light btn-lg mx-2 my-2'
                    href={c}
                    role='button'
                  >
                    {c}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {console.log(cities[0])}
    </header>
  );
}

export default Home;
