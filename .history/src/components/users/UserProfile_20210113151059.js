import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './../context/UserContext';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
	const { id } = useParams();
	 const { users } = useContext(UserContext);
	 const [user, setUser] = useState([])
	 useEffect(() => setUser(...users.filter(user => user.login.uuid === id)),[users, id])
	console.log(id);
	console.log(users);
	console.log(user);
	return (
		<>
    <div>
			mam {id}  {user.name.first} {user.name.last} {user.location.city} {user.dob.age}
    </div>
		</>
  )
}

export default UserProfile;
