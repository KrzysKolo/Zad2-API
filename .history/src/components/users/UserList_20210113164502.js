import React from 'react';

const UserList = ({ users }) => {
    const user = users.map(user => <User key={user.login.uuid} user={user})
    return (
        <div>
            {user}
        </div>
    )
}

export default UserList;
