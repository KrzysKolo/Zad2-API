import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = ({ users }) => {
	const { id } = useParams();
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		setUser(...users.filter(user => user.login.uuid === id));
	},[users, id])
	return (
    <div>
			{user.name.first}
    </div>
  )
}

export default UserProfile;
