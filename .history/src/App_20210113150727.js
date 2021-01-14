import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserContextProvider from './components/context/UserContext';
import UserList from "./components/users/UserList";
import "./components/sass/styles.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <UserContextProvider>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/:id" component={UserProfile} />
        </Switch>
        </UserContextProvider>
      </div>
    </Router>
  );
}
