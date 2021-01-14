import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import  User from "./User";
import UserProfile  from "./UserProfile";
import { Error, Loading } from './../infoPage/';

const Users = () => {

  return (
    <div className="container-users ">
      {isLoading && <Loading/>}
      {isErr && <Error />}
      <Switch>
        <Route path="/" exact >
          <User />
        </Route>
        <Route path="/:id" exact component={UserProfile} >
          <UserProfile users={users} />
        </Route>
      </Switch>

    </div>
  );
};
export default Users;
