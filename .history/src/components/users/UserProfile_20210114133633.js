import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const UserDetails = ({ users }) => {
	const [user, setUser] = useState();
	const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

	setTimeout(() => {
		setIsLoading(true);
	}, 500);

  useEffect(() => {
    if (users) {
      setUser(...users.filter((user) => user.login.uuid === id));
    }
  }, [users, id]);

  if (!users) {
    return <Redirect to="/" />;
  }

    const lat = user.location.coordinates.latitude;
    const lon = user.location.coordinates.longitude;
    const position = [parseFloat(lat), parseFloat(lon)];

    return (
      <>
			 <ReactPlaceholder
        showLoadingAnimation
        ready={isLoading}
        type="media"
				rows={4}
				style= {{marginTop: '20vh'}}
				color='#545252'
      >
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
			</ReactPlaceholder>


      </>
    );

};

export default UserDetails;
