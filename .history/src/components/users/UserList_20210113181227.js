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

    const user = users.map(user => <User key={user.login.uuid} user={user} />);
    return (
        <div>
            {user}
        </div>
    )
}

export default UserList;
