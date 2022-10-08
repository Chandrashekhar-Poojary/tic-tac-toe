import React from 'react'

const StatusMessage = ({ winner, current }) => {

    // const message = winner 
    // ? `Winner is ${winner}`
    // : `Next player is ${current.isXNext ? 'X':'O'}`;

    const noMovesLeft = current.board.every((el)=> el !== null);
    return (
        <h2>
            {winner && `Winner is ${winner}`}
            {!winner && !noMovesLeft && `Next player is ${current.isXNext? 'X' : 'O'}`}
            {!winner && noMovesLeft && 'X and O tied'}
        </h2>
    );
} // winner and !!0 is both are same first line after the <h2> tag

export default StatusMessage;