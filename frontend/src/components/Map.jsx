import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../src/index.css";
import { Icon } from "leaflet";
// import * as parkData from "../data"; // not finished typing the address as I don't think it's in this project?

const Map = ({ latitude, longitude }) => {
  // console.log(latitude);
  // console.log(longitude);

  console.table({ fakeobject: latitude, fakeobject2: longitude });
  if (latitude && longitude) {
    return (
      <div className='map'>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.6.0/dist/leaflet.css'
          integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
          crossOrigin=''
        />
        <div>
          <MapContainer
            center={[latitude, longitude]}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* <Marker position={[latitude, longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker> */}
            <Marker position={[53.33419343519067, -6.266086820249075]}>
              <Popup>
                Sprezzatura <br /> Lovely Italian but really reasonable.
              </Popup>
            </Marker>
            <Marker position={[53.34321621616519, -6.264508052173804]}>
              <Popup>
                777 <br /> Really good for Mexican and Margaritas.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    );
  }

  return <div>:/</div>;
};

export default Map;
