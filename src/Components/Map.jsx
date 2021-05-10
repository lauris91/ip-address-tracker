import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIcon from "../images/icon-location.svg";

const myIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  popupAnchor: [-0, -0],
  iconSize: [46, 56],
});

const Map = ({ searchData, setMap }) => {
  console.log("map comp");
  console.log("searchDATA ", searchData);
  return (
    <MapContainer
      center={[searchData.location.lat, searchData.location.lng]}
      zoom={13}
      scrollWheelZoom={false}
      className="map-container"
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[searchData.location.lat, searchData.location.lng]}
        icon={myIcon}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
