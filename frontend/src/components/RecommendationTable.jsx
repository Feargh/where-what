import Table from "react-bootstrap/Table";

function RecommendationTable({ recommendations }) {
  console.table(recommendations);

  return (
    <>
      <h2>Food recommendations:</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.latitude}</td>
              <td>{r.longitude}</td>
              <td>{r.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default RecommendationTable;

// 777	53.34321621616519, -6.264508052173804	Really good for Mexican and Margaritas.
// Hang Dai 	53.33520900875492, -6.2650310403776155	Unreal Chinese food
// Delahunt	53.33428373979245, -6.265105295691872	if they want something fancier.
// Uno Mas	53.34105720540218, -6.265418525973856	if they want something fancier.
// Mr. fox	53.352966052170146, -6.264880084117385	if they want something fancier.
// Nomo ramen, 	53.33375378322364, -6.264449063333478	Ramen
// Gursha	53.346878565442914, -6.255800682895497	Ethiopian
// Pickle (Indian), 	53.333985511453776, -6.265077239737323	Indian
// Masa for Mexican. 	53.335259485218444, -6.265026496966311	Mexican
// Spitalfields pub and restaurant	53.33970916824283, -6.275720876935363
// Space Jaru	53.341016563987196, -6.278339014395188	for really good Korean food and Fish Shop.
//  Grano	53.35127616864448, -6.282974619541645	Contemporary Italian
