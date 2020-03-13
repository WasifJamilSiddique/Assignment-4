import React, { useState } from 'react';
import './App.css';
import ShowUser from './Components/Show User/ShowUser';
import FriendsState from './Components/Friends State/FriendsState';

function App() {
  // onClick = {()=>props.handleAddFriend(props.user)}>
  /*const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState([]);

  const handleAddFriend = (newFriend) => {
    setCount(count+1);
    setFriends([...friends, newFriend]);

  }*/
  return (
    <div className="">
      <h1 className="text-center">Our User's</h1>
      <p className="lead text-center">We are providing the most precious feature in this website. You can add this famous person's in your friend circle through our website</p>
       <div className="App">
             <ShowUser></ShowUser>
      </div>
    </div>
  );
}


export default App;
