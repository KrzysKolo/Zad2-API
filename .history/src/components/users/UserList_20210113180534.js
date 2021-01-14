import React from 'react';
import User from './User';
import UserProfile from "./components/users/UserProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const API = "https://randomuser.me/api/?results=10";

const UserList = () => {
    const user = users.map(user => <User key={user.login.uuid} user={user} />);
    return (
        <div>
            {user}
        </div>
    )
}

export default UserList;
