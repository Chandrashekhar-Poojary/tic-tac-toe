import React from 'react';
import Square from './Square';

const Board = ({board, handleSquareClick, winningSquares}) => {

//   const [board, setBoard] = useState( Array(9).fill(null) );
//   const [isNext, setIsNext] = useState(false);
 
//   //console.log('board rerendered');

//  const handleSquareClick = (position) =>{

//     if(board[position]){ // cannot rewrite on board
//       return;
//     }
//     setBoard( (prev) =>{
//       return prev.map((square, pos) =>{
//         if(pos === position){
//           return isNext ? 'X': 'O';
//         }
//         return square;
//       })
//     })

//     setIsNext((prev)=> !prev);
//  };

 // custom function will accept one fun and retur square component
 const renderSquare = (position) =>{

  const isWinningSquare = winningSquares.includes(position);

  return (
    <Square 
      value={board[position]} 
      onClick={()=> handleSquareClick(position)}
      isWinningSquare={isWinningSquare}
    />
  );
 }
  return (
    <div className='board'>
        <div className='board-row'>
          { renderSquare(0) }
          { renderSquare(1) }
          { renderSquare(2) }
        </div>
        <div className='board-row'>
          { renderSquare(3) }
          { renderSquare(4) }
          { renderSquare(5) }
        </div>
        <div className='board-row'>
          { renderSquare(6) }
          { renderSquare(7) }
          { renderSquare(8) }
        </div>
    </div>
  );
};

export default Board;