import React from 'react';

//const Square = props => { // before destructuring 
const Square = ({value}) =>{ // after object destructuring ({})
    //console.log(props);
    return <button type="button" className='square'>{ value }</button> // instead of props.value just define value
};

export default Square;