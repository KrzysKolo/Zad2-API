import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';s

const UserProfile = () => {
	const { id } = useParams();
	const [user, setUser] = useState(null)
	return (
    <div>

    </div>
  )
}

export default UserProfile;
