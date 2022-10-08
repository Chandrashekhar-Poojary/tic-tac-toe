import React from 'react';

//const Square = props => { // before destructuring 
const Square = ({value, onClick, isWinningSquare}) =>{ // after object destructuring ({})
   // console.log('square rerendered');
    return (
        <button 
            type="button" 
            className='square'
            onClick={onClick} // onClick is a custom prop
            style={{
                fontWeight: isWinningSquare? 'bold': 'normal'
            }}
        >
            { value }
        </button> // instead of props.value just define value
    );
};

export default Square;