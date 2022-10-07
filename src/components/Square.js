import React from 'react';

//const Square = props => { // before destructuring 
const Square = ({value, onClick}) =>{ // after object destructuring ({})
   // console.log('square rerendered');
    return (
        <button type="button" className='square' 
            onClick={onClick} // onClick is a custom prop
        >
            { value }
        </button> // instead of props.value just define value
    );
};

export default Square;