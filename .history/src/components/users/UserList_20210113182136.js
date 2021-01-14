import React from 'react';
import User from './User';
import UserProfile from "./components/users/UserProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const API = "https://randomuser.me/api/?results=10";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => setUsers(data.results))
        .then(() => {
            setTimeout(() => {
              setIsLoading(true);
            }, 2000);
          })
        .catch(() => setIsErr(true))
    );
  }, []);

  return (
    <Router>
  	  <Route path="/" exact>

          {users.map((user) => (
            <ReactPlaceholder
              showLoadingAnimation
              ready={ready}
              type="media"
              style={{ flexBasis: 300, margin: 30 }}
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
