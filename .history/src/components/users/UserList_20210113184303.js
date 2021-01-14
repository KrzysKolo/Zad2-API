import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from '../User/User';
import UserDetails from '../UserDetails/UserDetails';

function UserList({ users }) {
  let usersList = users;
  return (
    <Router>
      <Switch>
        <Route path='/user/:id'>
          <UserDetails users={usersList} />
        </Route>
        <Route path='/'>
          <ul className='user__list'>
            {usersList.map((user, index) => (
              <User key={user.login.uuid} user={user} />
            ))}
          </ul>
        </Route>
      </Switch>
    </Router>
  );
}

export default UserList;