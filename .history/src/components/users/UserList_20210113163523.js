import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  User from "./User";
import  UserProfile from "./UserProfile";


const Users = ({ users }) => {
  let usersList = users;

  return (

    <Router>
      <Switch>
        <Route path='/' exact>
          <ul className="ul">
          {usersList.map((user, index) => (
              <User key={user.login.uuid} user={user} />
            ))}
          </ul>
        </Route>

        <Route path='/user/:id'>
          <UserProfile users={users} />
        </Route>
      </Switch>
    </Router>

  );
};
export default Users;
