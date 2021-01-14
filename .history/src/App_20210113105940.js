import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import UserList from "./components/users/UserList";
import "./components/sass/styles.scss";

export default function App() {
  return (
    <Router>
    <div className="App">
      <UserList />
    </div>
    </Router>
  );
}
