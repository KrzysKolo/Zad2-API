import React from 'react';

import  User from "./User";
import  UserProfile from "./UserProfile";


const Users = ({ users }) => {


  return (

    {users.map((user, index) => (<User key={user.login.uuid} user={user} />))}


  );
};
export default Users;
