import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import User from './User';

const UserProfile = ({ users }) => {
	const { id } = useParams();
	const [user, setUser] = useState();
	useEffect(() => {
		if (users) {
		  setUser(...users.filter((user) => user.login.uuid === id));
		}
	  }, [users, id]);
	return (
		<>
    <div>
			<User users={user} />
    </div>
		</>
  )
}

export default UserProfile;
