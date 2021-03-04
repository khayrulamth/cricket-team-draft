import React from 'react';
import './/Single.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Single = (props) => {
    const {name,image,salary} = props.player;
    return (
        <div className='player-info'>
            <div className="img-container">
                <img src={image} alt=""/>
            </div>
            <div className="info-container">
                <h4>Name: {name}</h4>
                <p>Price: {salary}$</p>
                <button onClick={()=>props.addHandlePlayer(props.player)}><FontAwesomeIcon icon={faPlus} /> add to team</button>
            </div>
        </div>
    );
};

export default Single;