import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  User from "./User";
import  UserProfile from "./UserProfile";


const Users = ({ users }) => {


  return (

    <Router>
      <Switch>
        <Route path='/user/:id'>
          <UserProfile users={users} />
        </Route>
        <Route path='/' exact>
          <ul className="ul">
          {users.map((user, index) => (
              <User key={user.login.uuid} user={user} />
            ))}
          </ul>
        </Route>

      </Switch>
    </Router>

  );
};
export default Users;
