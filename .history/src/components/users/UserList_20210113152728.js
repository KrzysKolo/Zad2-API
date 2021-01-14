import React from 'react';
import  User from "./User";


const Users = ({ users }) => {

  const user = users.map(user => <User key={user.login.uuid} user={user} />)

  return (

    <div className="container-users ">
          {user}


    </div>
  );
};
export default Users;
