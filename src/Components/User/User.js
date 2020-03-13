
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import '../../bootstrap.min.css';

const User = (props) => {
    const {name, image, biography, isFriend, email} = props.userData;
    const [btnInfo, setBtnInfo] = useState({disable: false})
    function btnHandler(){
        props.addUser(props.userData);
        btnInfo.disable = true;
    } 
    return (
        <div>
            <div className="card mb-3" style={{maxWidth: "1080px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={image} className="card-img" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{biography}</p>
                            <h6 className="lead text-warning">{email}</h6>
                            <button disabled={btnInfo.disable} onClick={btnHandler}
                                className="btn btn-success"><FontAwesomeIcon icon={faPlusCircle} />   Add Friend</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default User;