import React from "react";

const User = ({ user }) => {
  return (
    <div className="container-user">
      <div className="container-user__wrapper">asdfghjhgfd
        <div className="container-user__wrapper-img">
          <img src={user.picture.large} alt={user.name.last} />
        </div>
        <div className="container-user__wrapper-name">
        <h4>{user.name.title}</h4>
        <h3>{user.name.first} {user.name.last}</h3>
        </div>
      </div>
      <div className="container-user__info">

        <div className="container-user__info-address"></div>
        <div className="container-user__info-contact"></div>
        <div className="container-user__info-registrations"></div>
      </div>
    </div>
  );
};

export default User;
