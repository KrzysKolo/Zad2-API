import React from "react";

const User = ({ user }) => {
  return (
    <div className="container-user">
      <div className="container-user__img">
        <img src={user.picture.large} alt={user.name.last} />
      </div>
      <div className="container-info">{user.name.first}</div>
    </div>
  );
};

export default User;
