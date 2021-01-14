import React, { useContext } from 'react';
import { UserContext } from './../context/UserContext';
import { Route, Switch } from 'react-router-dom';
import  User from "./User";
import UserProfile  from "./UserProfile";
import { Error, Loading } from './../infoPage/';

const Users = () => {
  const { users, isLoading, isErr } = useContext(UserContext);
  const user = users.map(user => <User key={user.login.uuid} user={user} />)

  return (

    <div className="container-users ">


      <Switch>
        <Route path="/" exact >
          {user}
        </Route>
        <Route path="/:id" exact component={UserProfile} >
          <UserProfile />
        </Route>
      </Switch>

    </div>
  );
};
export default Users;
