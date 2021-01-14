import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  User from "./User";
import  UserProfile from "./UserProfile";


const Users = ({ users }) => {

  const user = users.map(user => <User key={user.login.uuid} user={user} />)
  return (

    <Router>
      <Switch>
        <Route path='/user/:id'>
          <UserProfile users={users} />
        </Route>
        <Route path='/'>
          <ul>
            {user}
          </ul>
        </Route>

      </Switch>
    </Router>

  );
};
export default Users;
