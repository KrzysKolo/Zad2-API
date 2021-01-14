import React,  { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

	const API = "https://randomuser.me/api/?results=10";
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
					isLoading(false);
					clearTimeout(timer);
        });
    }, 2000);
  }, []);

  return (
    <UserContext.Provider value={{users, setUsers, setIsLoading, setIsErr, isLoading, isErr}}>
			{ props.children }
    </UserContext.Provider>
  );
};
export default UserContextProvider;