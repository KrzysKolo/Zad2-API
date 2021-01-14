import React, { useState, useEffect} from "react";
import UserList from "./components/users/UserList";
import UserProfile from "./components/users/UserProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'react-placeholder/lib/reactPlaceholder.css';

// const API = "https://randomuser.me/api/?results=10";

export default function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/:id" exact component={UserProfile} />
        </Switch>
      </Router>
    </div>
  );
}
