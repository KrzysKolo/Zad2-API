import React,  { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {


console.log(users);
  return (
    <UserContext.Provider value={{users, setUsers, setIsLoading, setIsErr, isLoading, isErr}}>
			{ props.children }
    </UserContext.Provider>
  );
};
export default UserContextProvider;