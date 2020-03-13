
import React from 'react';
import './FriendsState.css'

const FriendsState = (props) => {
    const friends = props.friends;
    
    return (
        <div>
            <h3>Manage Your Friend Circle</h3>
            <h4>Your friends: {friends.length}</h4>
            <ol>
               {
                   friends.map(friend => 
                       <li className="lead mb-3">
                           <img className="little" src={friend.image} alt=""/>
                           {friend.name}  $ {friend.salary}
                       </li>
                   )
               }
            </ol>
        </div>
    );
};

export default FriendsState;