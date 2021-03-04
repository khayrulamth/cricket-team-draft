import React from 'react';

const Team = (props) => {
    const count = props.count;
    const totalPrice = count.reduce( (total,prdt)=>{
        return Math.round(Number(total+Number(prdt.salary)));
    },0);

    
    return (
        <div>
            <h3>Team Info:</h3>
            <h5>Team Players: {props.count.length}</h5>
            <p>Name:
                {
                    count.map(player=> player.name +" >> ")
                }
            </p>
            
            <p>Total Cost: {Number(totalPrice)}$</p>
        </div>
    );
};

export default Team;