import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = ({ users }) => {
	const { id } = useParams();
	const [user, setUser] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() =>{setUser(users.filter(user => user.login.uuid === id )) },[users, id]);
	const profil = user.map(item => <p key={item.id} item={item} /> )

	console.log( users)
	console.log(id);
	console.log(user);

	return (
    <div>
			mam {id} {profil}
    </div>
  )
}

export default UserProfile;
