import React from 'react';

//const Square = props => { // before destructuring 
const Square = ({value, onClick, isWinningSquare}) =>{ // after object destructuring ({})
   // console.log('square rerendered');
    return (
        <button 
            type="button" 
            onClick={onClick} // onClick is a custom prop
            className={`square ${isWinningSquare ? 'winning':''} 
            ${value === 'X'? 'text-green':'text-orange'}`}
        >
            { value }
        </button> // instead of props.value just define value
    );
};

export default Square;