import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/users/User';
import UserDetails from './components/users/UserProfile';

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
            {usersList.map((user) => (
              <User key={user.login.uuid} user={user} />
            ))}
          </ul>
        </Route>
      </Switch>
    </Router>
  );
}

export default UserList;
