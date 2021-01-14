import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const scale = 8;

function Map({user}) {
    const {first, last} = user.name;
    const position = [user.coordinates.latitude, user.coordinates.longitude];
    console.log(position)
    return (
        <div style={{width: 360, height: 320}}>
            <MapContainer
                center={position}
                zoom={scale}
                className="map"
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                    position={position}
                >
                    <Popup>
                        {`${first} ${last}`}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
