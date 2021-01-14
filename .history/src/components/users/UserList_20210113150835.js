import React, { useContext } from 'react';
import { UserContext } from './../context/UserContext';
import  User from "./User";
import { Error, Loading } from './../infoPage/';

const Users = () => {
  const { users, isLoading, isErr } = useContext(UserContext);
  const user = users.map(user => <User key={user.login.uuid} user={user} />)

  return (

    <div className="container-users ">
          {user}


    </div>
  );
};
export default Users;
