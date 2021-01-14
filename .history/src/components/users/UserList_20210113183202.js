import React, { useState, useEffect } from 'react';
import User from './User';
import UserProfile from './UserProfile';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const API = "https://randomuser.me/api/?results=10";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    fetch(API)
        .then((res) => res.json())
        .then((data) => setUsers(data.results))
        .then(() => {
            setTimeout(() => {
              setIsLoading(true);
            }, 2000);
          })
        .catch(() => setIsErr(true))

  }, []);

  return (
    <Router>
  	  <Route path="/" exact>

          {users.map((user) => (
            <ReactPlaceholder
              showLoadingAnimation
              ready={isLoading}
							type="media"
							rows={6}
              key={user.login.uuid}
            >
              <User key={user.login.uuid} user={user} />
            </ReactPlaceholder>
          ))}

        </Route>

        <Route path="/:id">
          <UserProfile users={users} />
        </Route>
      </Router>
    )
}

export default UserList;
