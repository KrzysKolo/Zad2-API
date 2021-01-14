import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = ({ users }) => {
	const { id } = useParams();
	const user = users.filter((user) => user.login.uuid === id)[0];
	console.log(id);
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
