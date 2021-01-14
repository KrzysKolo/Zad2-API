import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import newDate from "./newDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const User = ({ user }) => {
  console.log(user)
  const [isLoading, setIsLoading] = useState(false);
  setTimeout(() => {
		setIsLoading(true);
	}, 500);
  return (
    <ReactPlaceholder
        showLoadingAnimation
        ready={isLoading}
        type="media"
        rows={5}
        style={{marginTop: '20vh', marginLeft: 'auto', marginRight: 'auto', width: "50vh"}}
        color='#545252'
      >
    <Link to={`/user/${user.login.uuid}`} className="link">
    <div className="container-user">
      <div className="container-user__wrapper">

        <div className="container-user__wrapper-img">
          <img src={user.picture.large} alt={user.name.last} />
        </div>
        <div className="container-user__wrapper-name">
          <h4>{user.name.title}</h4>
          <h3>

            {user.name.first && user.name.last
              ? `${user.name.first} ${user.name.last}`
              : "No were provide firstname or lastname"}

          </h3>
        </div>
      </div>
      <div className="container-user__info">
        <div className="container-user__info-address">
          <h3>Address:</h3>
          <h4>
            City:{" "}
            {user.location.city ? `${user.location.city}` : "No wer City name"}
          </h4>
          <h4>
            Street:{" "}
            {user.location.street.name && user.location.street.number
              ? `${user.location.street.name} ${user.location.street.number}`
              : "No wer street name or no bilding number"}
          </h4>
        </div>
        <div className="container-user__info-contact">
          <h3>Contact:</h3>
          <h4>
            <FontAwesomeIcon icon={faEnvelope} /> {user.email}
          </h4>
        </div>
        <div className="container-user__info-registrations">
          <h3>Data registration:</h3>
          <h4> { newDate(user.registered.date)}</h4>
        </div>

      </div>
    </div>
    </Link>
    </ReactPlaceholder>
  );
};

export default User;
