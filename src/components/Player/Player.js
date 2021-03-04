import React, { useEffect, useState } from 'react';
import Single from '../../Team/Single/Single';
import Team from '../../Team/Team';
import './Player.css'
import '../../..//node_modules/bootstrap/dist/css/bootstrap.min.css';


const Player = () => {
    const [players, setPlayers] = useState([]);
    const [count, setCount] = useState([]);

    useEffect(() => {
        fetch('https://api.mocki.io/v1/92aeedc1')
            .then(res => res.json())
            .then(data => { setPlayers(data) })
    }, [])
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