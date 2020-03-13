
import React, {useState} from 'react';
import data from '../../data'
import User from '../User/User';
import '../../App.css'
import FriendsState from '../Friends State/FriendsState';

const ShowUser = (props) => {
    const [count, setCount] = useState(0);
    const [friends, setFriends] = useState([]);
    const handleAddUser = (user) => {
        const newUser = [...friends, user];
        setFriends(newUser);
    }
    return (
        <div className="App">
            <div className="user-container">
                {
                    data.map(obj => <User userData={obj} addUser={handleAddUser}></User>)
                }
            </div>
            <div className="state-container">
                <FriendsState friends={friends}></FriendsState>
            </div>
        </div>
    );
};

export default ShowUser;