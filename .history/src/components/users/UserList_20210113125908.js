import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import  User from "./User";
import UserProfile  from "./UserProfile";
import { Error, Loading } from './../infoPage/';

const Users = () => {
  const API = "https://randomuser.me/api/?results=10";

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setTimeout(() => {
      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.results);
          setUsers(res.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsErr(true);
          setIsLoading(false);
        });
    }, 2000);
  };

  const user = users.map((user) => <User key={user.login.uuid} user={user} />);

  return (
    <div className="container-users ">
      {isLoading && <Loading/>}
      {isErr && <Error />}
      <Switch>
        <Route path="/" exact >
          {user}
        </Route>
        <Route path="/:id" exact component={UserProfile} >
          <UserProfile users={users} />
        </Route>
      </Switch>

    </div>
  );
};
export default Users;
