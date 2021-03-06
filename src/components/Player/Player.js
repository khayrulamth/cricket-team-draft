import React, { useEffect, useState } from 'react';
import Single from '../../Team/Single/Single';
import Team from '../../Team/Team';
import './Player.css'
import '../../..//node_modules/bootstrap/dist/css/bootstrap.min.css';
import data from '../../../src/fakeData/fakeData.json';


const Player = () => {
    const [players, setPlayers] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(()=>{
        setPlayers(data);
    },[])
    const addHandlePlayer = (player) => {
        const newPlayer = [...count, player];
        setCount(newPlayer);
    }

    return (
        <div  className="full-team container ">
            <div>
                {
                    players.map(player => <Single addHandlePlayer={addHandlePlayer} key={player.id} count={count} player={player}></Single>)
                }
            </div>
            <div className="team-info">
                <h1>This is team</h1>
                <Team count={count}></Team>
            </div>
        </div>
    );
};

export default Player;