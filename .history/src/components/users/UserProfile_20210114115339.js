import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
// import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const UserDetails = ({ users }) => {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (users) {
      setUser(...users.filter((user) => user.login.uuid === id));
    }
  }, [users, id]);

  if (!users) {
    return <Redirect to="/" />;
  }

  if (user) {
    const lat = user.location.coordinates.latitude;
    const lon = user.location.coordinates.longitude;
    const position = [parseFloat(lat), parseFloat(lon)];

    return (
      <>
      <div className="user-profile-wrapper">
				<div className="user-profile-wrapper__left">
					<div className="user-profile-wrapper__left-photo">
						<img src={user.picture.large} alt={user.name.first} />
					</div>
					<div className="user-profile-wrapper__left-age">
						Age: {user.dob.age}
					</div>
				</div>
				<div className="user-profile-wrapper__right">
					<div className="user-profile-wrapper__right-name">
						{user.name.first} {user.name.last}
					</div>
					<div className="user-profile-wrapper__right-address">
					Address: {user.location.city}, {user.location.street.name} {user.location.street.number}
					</div>
				</div>
			</div>
			<div className="link-btn">

        <Link to="/" className="link">Back</Link>
			</div>

       {/*  <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default UserDetails;
