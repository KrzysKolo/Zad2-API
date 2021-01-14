import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = ({ users }) => {
	const { id } = useParams();
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() =>{
		setUser(getUser());
	},[id])
	const getUser = () => {
		users.filter(user => user.login.uuid === id);
	}
	console.log( users)
	console.log(id);
	console.log(user);

	return (
    <div>
			mam {id}
    </div>
  )
}

export default UserProfile;
