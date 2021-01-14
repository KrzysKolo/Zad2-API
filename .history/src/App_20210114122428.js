import React, { useState, useEffect} from "react";
import UserList from "./components/users/UserList";
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import './components/sass/styles.scss';

const API = "https://randomuser.me/api/?results=10";

export default function App() {
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
    <div className="App">

       <UserList users={users} />

    </div>
  );
}
