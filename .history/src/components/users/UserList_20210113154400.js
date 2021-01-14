import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  User from "./User";
import  UserProfile from "./UserProfile";


const Users = ({ users }) => {

  const user = users.map(user => <User key={user.login.uuid} user={user} />)
  let userList = users;
  return (

<Router>
  <Switch>
    <Route path='/user/:id'>

    </Route>

  </Switch>
</Router>
    <div className="container-users ">
          {user}


    </div>
  );
};
export default Users;
