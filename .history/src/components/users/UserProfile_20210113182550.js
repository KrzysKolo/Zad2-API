import React from 'react';
import { useParams } from 'react-router-dom';
import User from './User';

const UserProfile = ({ users }) => {
	const { id } = useParams();
	const [user, setUser] = useState();
	console.log(id);
	console.log(users);
	return (
		<>
    <div>
			<User users={user} />
    </div>
		</>
  )
}

export default UserProfile;
