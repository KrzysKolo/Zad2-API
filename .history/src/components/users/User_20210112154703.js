import React from "react";

const User = ({ user }) => {
  return (
    <div className="container-user">
      <div className="container-user__img">
        <img src={user.picture.large} alt={user.name.last} />
      </div>
      <div className="container-user__info">
        <div className="container-user__info-name">
        {user.name.title} {user.name.first} {user.name.last}
        </div>
        <div className="container-user__info-address"></div>
        <div className="container-user__info-contact"></div>
        <div className="container-user__info-registrations"></div>
      </div>
    </div>
  );
};

export default User;
