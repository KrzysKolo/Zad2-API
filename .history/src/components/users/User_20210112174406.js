import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const User = ({ user }) => {
  return (
    <div className="container-user">
      <div className="container-user__wrapper">asdfghjhgfd
        <div className="container-user__wrapper-img">
          <img src={user.picture.large} alt={user.name.last} />
        </div>
        <div className="container-user__wrapper-name">
          <h4>{user.name.title}</h4>
          <h3>{user.name.first && user.name.last ? `${user.name.first} ${user.name.last}`: "Nie przekazano imienia i nazwiska."}</h3>
        </div>
      </div>
      <div className="container-user__info">
        <div className="container-user__info-address">
          <h3>Address:</h3>
          <h4>City: {user.location.city}</h4>
          <h4>Street: {user.location.street.name} {user.location.street.number}</h4>
        </div>
        <div className="container-user__info-contact">
        <h3>Address:</h3>
        <h4><FontAwesomeIcon icon={faEnvelope} /> {user.email}</h4>
        </div>
        <div className="container-user__info-registrations">
        <h3>Data registration:</h3>
        <h4><FontAwesomeIcon icon={faEnvelope} /> {user.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default User;
