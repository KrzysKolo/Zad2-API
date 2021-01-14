import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ user }) {
  const x = user.location.coordinates.latitude;
  const y = user.location.coordinates.longitude;
  return (
    <>
      <MapContainer
        center={[x, y]}
        zoom={9}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[x, y]}>
          <Popup>My place</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}


export default Map
