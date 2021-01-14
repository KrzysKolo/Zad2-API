import React, { useState, useEffect} from "react";
import UserList from "./components/users/UserList";
import "./components/sass/styles.scss";
const API = "https://randomuser.me/api/?results=10";

export default function App() {


  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.results);
          setUsers(res.results);
          setIsLoading(false);
        })
        .catch(() => {
          setIsErr(true);
					//isLoading(false);
					clearTimeout(timer);
        });
    }, 2000);
  }, []);
  return (
    <UserList users={users} />
  );
}
