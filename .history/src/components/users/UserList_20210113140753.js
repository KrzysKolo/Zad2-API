import React, { useContext } from 'react';
import { UserContext } from './../context/UserContext';
import { Route, Switch } from 'react-router-dom';
import  User from "./User";
import UserProfile  from "./UserProfile";
import { Error, Loading } from './../infoPage/';

const Users = () => {

	const API = "https://randomuser.me/api/?results=10";
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    let timer = setTimeout(() => {
      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.results);
          setUsers(res.results);
          setIsLoading(false);
        })
        .catch(() => {
          setIsErr(true);
					isLoading(false);
					clearTimeout(timer);
        });
    }, 2000);
  };
  const user = users.map(user => <User key={user.login.uuid} user={user} />)

  return (

    <div className="container-users ">


      <Switch>
        <Route path="/" exact >
          {user}
        </Route>
        <Route path="/:id" exact component={UserProfile} >
          <UserProfile />
        </Route>
      </Switch>

    </div>
  );
};
export default Users;
